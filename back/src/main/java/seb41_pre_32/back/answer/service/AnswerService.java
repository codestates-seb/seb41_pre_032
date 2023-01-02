package seb41_pre_32.back.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.answer.dto.AnswerPatchDto;
import seb41_pre_32.back.answer.dto.AnswerPostDto;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.answer.repository.AnswerRepository;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;
import seb41_pre_32.back.exception.answer.AnswerNotFoundException;
import seb41_pre_32.back.exception.question.QuestionNotFoundException;
import seb41_pre_32.back.exception.user.NotAuthorizedUserAccessException;
import seb41_pre_32.back.exception.user.UserNotFoundException;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.question.repository.QuestionRepository;
import seb41_pre_32.back.user.entity.User;
import seb41_pre_32.back.user.repository.UserRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;

    @Transactional
    public Answer createAnswer(final AnswerPostDto answerPostDto,
                               final AuthInfo authInfo) {
        User user = findValidateUser(authInfo.getUserId());
        Question question = findValidateQuestion(Long.parseLong(answerPostDto.getQuestionId()));

        Answer answer = Answer.builder()
                .contents(answerPostDto.getContents())
                .likeCount(0)
                .disLikeCount(0)
                .build();

        answer.addUser(user);
        answer.addQuestion(question);

        return answerRepository.save(answer);
    }

    private User findValidateUser(final Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException());
    }

    private Question findValidateQuestion(final Long questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new QuestionNotFoundException());
    }

    @Transactional
    public Answer updateAnswer(final Long answerId,
                               final AuthInfo authInfo,
                               final AnswerPatchDto answerPatchDto) {
        Answer answer = findValidateAnswer(answerId);
        checkValidateUser(authInfo.getEmail(), answer.getUser().getEmail());
        answer.changeContents(answerPatchDto.getContents());
        return answer;
    }

    private Answer findValidateAnswer(final Long answerId) {
        return answerRepository.findById(answerId)
                .orElseThrow(() -> new AnswerNotFoundException());
    }

    private void checkValidateUser(final String authUserEmail,
                                   final String answerUserEmail) {
        if (!authUserEmail.equals(answerUserEmail)) {
            throw new NotAuthorizedUserAccessException();
        }
    }

    public Answer getAnswer(final Long answerId) {
        return findValidateAnswer(answerId);
    }

    @Transactional
    public void deleteAnswer(final Long answerId, final AuthInfo authInfo) {
        Answer answer = findValidateAnswer(answerId);
        checkValidateUser(authInfo.getEmail(), answer.getUser().getEmail());
        answerRepository.deleteById(answerId);
    }

    public Page<Answer> getAnswers(final Long questionId,
                                   final int page,
                                   final int size) {
        return answerRepository.findAnswersByQuestion(questionId,
                PageRequest.of(page, size, Sort.by("createdDate").descending()));
    }

    @Transactional
    public Answer likeAnswer(final Long answerId) {
        Answer answer = findValidateAnswer(answerId);
        answer.updateLikeCount();
        return answer;
    }

    @Transactional
    public Answer dislikeAnswer(final Long answerId) {
        Answer answer = findValidateAnswer(answerId);
        answer.updateDisLikeCount();
        return answer;
    }
}