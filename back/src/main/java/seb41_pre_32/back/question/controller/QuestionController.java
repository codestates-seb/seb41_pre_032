package seb41_pre_32.back.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb41_pre_32.back.auth.dto.AuthInfo;
import seb41_pre_32.back.auth.utils.LoginUser;
import seb41_pre_32.back.common.dto.MultiResponse;
import seb41_pre_32.back.question.dto.QuestionPatchDto;
import seb41_pre_32.back.question.dto.QuestionPostDto;
import seb41_pre_32.back.question.dto.QuestionResponseDto;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.question.service.QuestionService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody @Valid QuestionPostDto questionPostDto,
                                       @LoginUser AuthInfo authInfo) {
        return new ResponseEntity<>(
                QuestionResponseDto.of(questionService.createQuestion(questionPostDto, authInfo)),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{questionId}")
    public ResponseEntity editQuestion(@PathVariable("questionId") Long questionId,
                                       @RequestBody @Valid QuestionPatchDto questionPatchDto,
                                       @LoginUser AuthInfo authInfo) {
        return new ResponseEntity<>(
                QuestionResponseDto.of(questionService.editQuestion(questionPatchDto, questionId, authInfo)),
                HttpStatus.OK);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId") Long questionId) {
        return new ResponseEntity<>(
                QuestionResponseDto.of(questionService.findQuestion(questionId)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<MultiResponse> getQuestions(@RequestParam("page") int page,
                                                      @RequestParam("size") int size) {

        Page<Question> questions = questionService.findQuestions(page - 1, size);
        List<QuestionResponseDto> response =
                questions.getContent().stream()
                        .map(question -> QuestionResponseDto.of(question))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(new MultiResponse<>(response, questions), HttpStatus.OK);
    }

    @DeleteMapping("/{questionId}")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") Long questionId,
                                         @LoginUser AuthInfo authInfo) {
        questionService.deleteQuestion(questionId, authInfo);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
