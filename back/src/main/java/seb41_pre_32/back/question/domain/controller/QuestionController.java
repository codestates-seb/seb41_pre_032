package seb41_pre_32.back.question.domain.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb41_pre_32.back.common.dto.MultiResponse;
import seb41_pre_32.back.question.domain.dto.QuestionPatchDto;
import seb41_pre_32.back.question.domain.dto.QuestionPostDto;
import seb41_pre_32.back.question.domain.dto.QuestionResponseDto;
import seb41_pre_32.back.question.domain.entity.Question;
import seb41_pre_32.back.question.domain.mapstruct.mapper.QuestionMapper;
import seb41_pre_32.back.question.domain.service.QuestionService;
import seb41_pre_32.back.user.service.UserService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final UserService userService;
    private final QuestionMapper mapper;

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody @Valid QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(questionPostDto);
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);
    }

    @PatchMapping("/{questionId}")
    public ResponseEntity editQuestion(@PathVariable("questionId") Long questionId,
                                       @RequestBody @Valid QuestionPatchDto questionPatchDto) {
        Question question = questionService.editQuestion(questionPatchDto, questionId);
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId") Long questionId) {
        Question response = questionService.findQuestion(questionId);
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<MultiResponse> getQuestions(@RequestParam("page") int page,
                                                      @RequestParam("size") int size) {

        Page<Question> questions = questionService.findQuestions(page - 1, size);
        List<QuestionResponseDto> response =
                questions.getContent().stream()
                        .map(question -> mapper.questionToQuestionResponseDto(question))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(new MultiResponse<>(response, questions), HttpStatus.OK);
    }

    @DeleteMapping("/{questionId}")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
