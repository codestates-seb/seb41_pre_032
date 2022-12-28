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
import seb41_pre_32.back.auth.dto.AuthInfo;
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

        User user = findUser(authInfo.getUserId());
        Question question = findQuestion(Long.parseLong(answerPostDto.getQuestionId()));

        Answer answer = Answer.builder()
                .contents(answerPostDto.getContents())
                .likeCount(0)
                .disLikeCount(0)
                .user(user)
                .question(question)
                .build();

        return answerRepository.save(answer);
    }

    private User findUser(final Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException());
    }

    private Question findQuestion(final Long questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new QuestionNotFoundException());
    }

    @Transactional
    public Answer updateAnswer(final Long answerId,
                               final AuthInfo authInfo,
                               final AnswerPatchDto answerPatchDto) {
        Answer answer = findAnswer(answerId);
        checkValidateUser(authInfo.getUserId(), answer.getUser().getId());
        answer.changeContents(answerPatchDto.getContents());

        return answer;
    }

    private Answer findAnswer(final Long answerId) {
        return answerRepository.findById(answerId)
                .orElseThrow(() -> new AnswerNotFoundException());
    }

    private void checkValidateUser(final Long authId, final Long answerUserId) {
        if (authId != answerUserId) {
            throw new NotAuthorizedUserAccessException();
        }
    }

    @Transactional
    public void deleteAnswer(final Long answerId, final AuthInfo authInfo) {
        Answer answer = findAnswer(answerId);
        checkValidateUser(authInfo.getUserId(), answer.getUser().getId());
        answerRepository.deleteById(answerId);
    }

    public Page<Answer> getAnswers(Long questionId, int page, int size) {
        Question question = findQuestion(questionId);
        return answerRepository.findAnswersByQuestion(questionId,
                PageRequest.of(page, size, Sort.by("createdDate").descending()));
    }
}