package seb41_pre_32.back.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.answer.repository.AnswerRepository;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;
import seb41_pre_32.back.exception.user.DuplicateUserEmailException;
import seb41_pre_32.back.exception.user.NotAuthorizedUserAccessException;
import seb41_pre_32.back.exception.user.UserNotFoundException;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.question.repository.QuestionRepository;
import seb41_pre_32.back.user.dto.UserPatchRequest;
import seb41_pre_32.back.user.dto.UserPostRequest;
import seb41_pre_32.back.user.entity.User;
import seb41_pre_32.back.user.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public User createUser(final UserPostRequest userPostRequest) {
        User user = userPostRequest.toUser();
        checkEmailDuplicate(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(userPostRequest.getPassword());
        user.changePassword(encryptedPassword);
        user.changeLocation("서울");
        user.changeProfile("http://file3.instiz.net/data/file3/2021/05/31/7/0/9/7091080ae49c76e54021c3c3e42c7469.png");

        User savedUser = userRepository.save(user);
        return savedUser;
    }

    private void checkEmailDuplicate(String email) {
        boolean isEmailDuplicated = userRepository.existsUserByEmail(email);
        if (isEmailDuplicated) {
            throw new DuplicateUserEmailException();
        }
    }

    @Transactional
    public User updateUser(Long userId, UserPatchRequest userPatchRequest, AuthInfo authInfo) {
        validateOwnInfo(userId, authInfo);
        User findUser = findValidUser(userId);

        Optional.ofNullable(userPatchRequest.getDisplayName())
                .ifPresent(username -> findUser.changeUsername(username));
        Optional.ofNullable(userPatchRequest.getProfileUrl())
                .ifPresent(url -> findUser.changeProfile(url));
        Optional.ofNullable(userPatchRequest.getLocation())
                .ifPresent(location -> findUser.changeLocation(location));

        return findUser;
    }

    private User findValidUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException());
    }

    @Transactional
    public void deleteUser(Long userId, AuthInfo authInfo) {
        validateOwnInfo(userId, authInfo);
        findValidUser(userId);
        userRepository.deleteById(userId);
    }

    public User findUser(Long userId, AuthInfo authInfo) {
        validateOwnInfo(userId, authInfo);
        User findUser = findValidUser(userId);

        List<Answer> userAnswers = findUserAnswers(userId);
        findUser.addAnswers(userAnswers);

        List<Question> userQuestions = findUserQuestions(userId);
        findUser.addQuestions(userQuestions);

        return findUser;
    }

    private List<Answer> findUserAnswers(Long userId) {
        List<Answer> answers = answerRepository.findAnswersByUserId(userId);
        if (answers.size() == 0) return new ArrayList<>();
        else return answers;
    }

    private List<Question> findUserQuestions(Long userId) {
        List<Question> questions = questionRepository.findQuestionsByUserId(userId);
        if (questions.size() == 0) return new ArrayList<>();
        else return questions;
    }


    private void validateOwnInfo(Long userId, AuthInfo authInfo) {
        if (userId != authInfo.getUserId()) {
            throw new NotAuthorizedUserAccessException();
        }
    }

    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page, size, Sort.by("id")));
    }
}
