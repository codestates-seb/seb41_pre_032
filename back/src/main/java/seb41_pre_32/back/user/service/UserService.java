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
import seb41_pre_32.back.user.entity.Role;
import seb41_pre_32.back.user.entity.User;
import seb41_pre_32.back.user.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    @Transactional
    public User createOrUpdateGoogleUser(final String email) {
        User user;

        if (isFirstLogin(email)) {
            user = User.of(email);
            String encryptedPassword = passwordEncoder.encode(UUID.randomUUID().toString());
            user.changePassword(encryptedPassword);
            user.changeRole(Role.USER);
            user.changeLocation("서울");
            user.changeProfile("http://file3.instiz.net/data/file3/2021/05/31/7/0/9/7091080ae49c76e54021c3c3e42c7469.png");
        } else {
            user = userRepository.findByEmail(email).get();
        }

        return userRepository.save(user);
    }

    private boolean isFirstLogin(String email) {
        return !userRepository.existsUserByEmail(email);
    }

    private void checkEmailDuplicate(final String email) {
        boolean isEmailDuplicated = userRepository.existsUserByEmail(email);
        if (isEmailDuplicated) {
            throw new DuplicateUserEmailException();
        }
    }

    @Transactional
    public User updateUser(final Long userId, final UserPatchRequest userPatchRequest, final AuthInfo authInfo) {
        User findUser = findValidUser(userId);
        validateOwnInfo(findUser.getEmail(), authInfo);

        Optional.ofNullable(userPatchRequest.getDisplayName())
                .ifPresent(username -> findUser.changeUsername(username));

        Optional.ofNullable(userPatchRequest.getProfileUrl())
                .ifPresent(url -> findUser.changeProfile(url));

        Optional.ofNullable(userPatchRequest.getLocation())
                .ifPresent(location -> findUser.changeLocation(location));

        return findUser;
    }

    private User findValidUser(final Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException());
    }

    private void validateOwnInfo(final String email, final AuthInfo authInfo) {
        if (!email.equals(authInfo.getEmail())) {
            throw new NotAuthorizedUserAccessException();
        }
    }

    @Transactional
    public void deleteUser(final Long userId, final AuthInfo authInfo) {
        User findUser = findValidUser(userId);
        validateOwnInfo(findUser.getEmail(), authInfo);
        userRepository.deleteById(userId);
    }

    public User findUser(final Long userId) {
        User findUser = findValidUser(userId);

        findUserAnswers(userId).forEach(
                answer -> answer.addUser(findUser));
        findUserQuestions(userId).forEach(
                question -> question.addUser(findUser)
        );

        return findUser;
    }

    private List<Answer> findUserAnswers(final Long userId) {
        List<Answer> answers = answerRepository.findAnswersByUserId(userId);
        if (answers.size() == 0) return new ArrayList<>();
        else return answers;
    }

    private List<Question> findUserQuestions(final Long userId) {
        List<Question> questions = questionRepository.findQuestionsByUserId(userId);
        if (questions.size() == 0) return new ArrayList<>();
        else return questions;
    }

    public Page<User> findUsers(final int page, final int size) {
        return userRepository.findAll(PageRequest.of(page, size, Sort.by("id")));
    }
}
