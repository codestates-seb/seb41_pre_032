package seb41_pre_32.back.question.domain.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.auth.dto.AuthInfo;
import seb41_pre_32.back.auth.utils.LoginUser;
import seb41_pre_32.back.exception.question.QuestionNotFoundException;
import seb41_pre_32.back.question.domain.dto.QuestionPatchDto;
import seb41_pre_32.back.question.domain.dto.QuestionPostDto;
import seb41_pre_32.back.question.domain.entity.Question;
import seb41_pre_32.back.question.domain.repository.QuestionRepository;
import seb41_pre_32.back.user.domain.User;
import seb41_pre_32.back.user.service.UserService;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final UserService userService;

    @Transactional
    public Question createQuestion(QuestionPostDto questionPostDto, AuthInfo authInfo) {
        User user = userService.findUser(Long.parseLong(questionPostDto.getUserId()), authInfo);
        Question question = questionPostDto.toQuestion();
        question.addUser(user);
        return questionRepository.save(question);
    }

    @Transactional
    public Question editQuestion(QuestionPatchDto questionPatchDto, Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        Optional.ofNullable(questionPatchDto.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(questionPatchDto.getContents())
                .ifPresent(contents -> findQuestion.setContents(contents));
        Optional.ofNullable(questionPatchDto.getAttempt())
                .ifPresent(attempt -> findQuestion.setAttempt(attempt));
        //태그
        // 수정한 후에는 다시 저장하지 않아도 자동으로 변경됩니다.

        return findQuestion;
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("modifiedDate")));
    }

    @Transactional
    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    public Question findVerifiedQuestion(Long questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new QuestionNotFoundException());
    }
}
