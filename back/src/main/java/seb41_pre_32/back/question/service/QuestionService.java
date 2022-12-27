package seb41_pre_32.back.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.auth.dto.AuthInfo;
import seb41_pre_32.back.exception.question.QuestionNotFoundException;
import seb41_pre_32.back.exception.user.NotAuthorizedBadException;
import seb41_pre_32.back.exception.user.UserNotFoundException;
import seb41_pre_32.back.question.dto.QuestionPatchDto;
import seb41_pre_32.back.question.dto.QuestionPostDto;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.question.repository.QuestionRepository;
import seb41_pre_32.back.tag.entity.Question_Tag;
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

        List<Question_Tag> question_tags = tags.stream()
                .map(tag -> new Question_Tag(question, tag))
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
            throw new NotAuthorizedBadException();
        }
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("modifiedDate")));
    }

    @Transactional
    public void deleteQuestion(final Long questionId, final AuthInfo authInfo) {
        Question findQuestion = findVerifiedQuestion(questionId);
        checkValidateUser(authInfo.getUserId(), findQuestion.getUser().getId());
        questionRepository.deleteById(questionId);
    }

    public Question findVerifiedQuestion(Long questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new QuestionNotFoundException());
    }
}