package seb41_pre_32.back.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb41_pre_32.back.answer.dto.AnswerPatchDto;
import seb41_pre_32.back.answer.dto.AnswerPostDto;
import seb41_pre_32.back.answer.dto.AnswerResponseDto;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.answer.service.AnswerService;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;
import seb41_pre_32.back.auth.presentation.LoginUser;
import seb41_pre_32.back.common.dto.MultiResponse;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/answers")
public class AnswerController {

    private final AnswerService answerService;

    // Answer 등록
    @PostMapping
    public ResponseEntity postAnswer(@RequestBody @Valid final AnswerPostDto answerPostDto,
                                     @LoginUser final AuthInfo authInfo) {
        return new ResponseEntity<>(
                AnswerResponseDto.of(answerService.createAnswer(answerPostDto, authInfo)),
                HttpStatus.CREATED);
    }

    // Answer 수정
    @PatchMapping("/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") final Long answerId,
                                      @LoginUser final AuthInfo authInfo,
                                      @RequestBody @Valid final AnswerPatchDto answerPatchDto) {
        return new ResponseEntity<>(
                AnswerResponseDto.of(answerService.updateAnswer(answerId, authInfo, answerPatchDto)),
                HttpStatus.OK);
    }

    // 해당 질문에 포함된 Answer 리스트 전체 조회
    @GetMapping("/{questionId}")
    public ResponseEntity getAnswers(@PathVariable("questionId") final Long questionId,
                                     @RequestParam("page") final int page,
                                     @RequestParam("size") final int size) {

        Page<Answer> answers = answerService.getAnswers(questionId, page - 1, size);

        List<AnswerResponseDto> answerResponseDtos = answers.getContent()
                .stream()
                .map(AnswerResponseDto::of).collect(Collectors.toList());

        return new ResponseEntity<>(new MultiResponse<>(answerResponseDtos, answers), HttpStatus.OK);
    }

    //Answer 삭제
    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable("answerId") final Long answerId,
                                       @LoginUser final AuthInfo authInfo) {
        answerService.deleteAnswer(answerId, authInfo);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}