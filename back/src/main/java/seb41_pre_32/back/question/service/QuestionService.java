package seb41_pre_32.back.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.answer.repository.AnswerRepository;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;
import seb41_pre_32.back.exception.question.QuestionNotFoundException;
import seb41_pre_32.back.exception.user.NotAuthorizedUserAccessException;
import seb41_pre_32.back.exception.user.UserNotFoundException;
import seb41_pre_32.back.question.dto.QuestionPatchDto;
import seb41_pre_32.back.question.dto.QuestionPostDto;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.question.repository.QuestionRepository;
import seb41_pre_32.back.tag.entity.QuestionTag;
import seb41_pre_32.back.tag.entity.Tag;
import seb41_pre_32.back.tag.repository.TagRepository;
import seb41_pre_32.back.user.entity.User;
import seb41_pre_32.back.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;
    private final TagRepository tagRepository;

    @Transactional
    public Question createQuestion(final QuestionPostDto questionPostDto,
                                   final AuthInfo authInfo) {

        User user = findUser(authInfo.getUserId());

        List<Tag> tags = questionPostDto.getTaglist().stream()
                .map(s -> new Tag(s))
                .collect(Collectors.toList());

        tagRepository.saveAll(tags);

        Question question = questionPostDto.toQuestion();
        question.addUser(user);

        List<QuestionTag> question_tags = tags.stream()
                .map(tag -> new QuestionTag(question, tag))
                .collect(Collectors.toList());

        question.addTags(question_tags);

        return questionRepository.save(question);
    }

    private User findUser(final Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException());
    }

    @Transactional
    public Question editQuestion(final QuestionPatchDto questionPatchDto,
                                 final Long questionId,
                                 final AuthInfo authInfo) {

        Question findQuestion = findVerifiedQuestion(questionId);
        checkValidateUser(authInfo.getUserId(), findQuestion.getUser().getId());

        Optional.ofNullable(questionPatchDto.getTitle())
                .ifPresent(title -> findQuestion.changeTitle(title));
        Optional.ofNullable(questionPatchDto.getContents())
                .ifPresent(contents -> findQuestion.changeContents(contents));
        Optional.ofNullable(questionPatchDto.getAttempt())
                .ifPresent(attempt -> findQuestion.changeAttempt(attempt));

        return findQuestion;
    }

    private void checkValidateUser(final Long authId, final Long savedId) {
        if (authId != savedId) {
            throw new NotAuthorizedUserAccessException();
        }
    }

    public Question findQuestion(Long questionId) {
        Question question = findVerifiedQuestion(questionId);
        List<Answer> answers = answerRepository.findAnswersByQuestion(questionId);
        answers.forEach(answer -> answer.addQuestion(question));

        return question;
    }

    public Page<Question> findQuestions(final int page, final int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("modifiedDate").descending()));
    }

    @Transactional
    public void deleteQuestion(final Long questionId, final AuthInfo authInfo) {
        Question findQuestion = findVerifiedQuestion(questionId);
        checkValidateUser(authInfo.getUserId(), findQuestion.getUser().getId());
        questionRepository.deleteById(questionId);
    }

    public Question findVerifiedQuestion(final Long questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new QuestionNotFoundException());
    }

    @Transactional
    public Question likeQuestion(final Long questionId) {
        Question question = findVerifiedQuestion(questionId);
        question.updateLikeCount();
        question.updateReputation();
        return question;
    }

    @Transactional
    public Question dislikeQuestion(final Long questionId) {
        Question question = findVerifiedQuestion(questionId);
        question.updateDisLikeCount();
        question.updateReputation();
        return question;
    }

    public Page<Question> findQuestionsByLikes(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("reputation").descending()));
    }
}
