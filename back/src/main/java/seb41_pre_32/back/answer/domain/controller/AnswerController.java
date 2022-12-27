package seb41_pre_32.back.answer.domain.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb41_pre_32.back.answer.domain.dto.AnswerDto;
import seb41_pre_32.back.answer.domain.entity.Answer;
import seb41_pre_32.back.answer.domain.mapper.AnswerMapper;
import seb41_pre_32.back.answer.domain.service.AnswerService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;


@RestController
@RequestMapping("/answers")
@Validated
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    //answer 등록
   @PostMapping("/{questionId}/answers")
    public ResponseEntity postAnswer(@PathVariable long questionId,
                                     @Valid @RequestBody AnswerDto.AnswerPostDto requestBody){

       Answer answer = mapper.answerPostDtoToAnswer(requestBody);
       Answer createdAnswer = answerService.createAnswer(answer);
       AnswerDto.AnswerResponse response = mapper.answerToAnswerResponse(createdAnswer);

       return new ResponseEntity<>(response, HttpStatus.CREATED);
   }

   //answer 수정
    @PatchMapping("/{questionId}/answers/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("questionId")@Positive long questionId,
                                      @PathVariable("answerId")@Positive long answerId,
                                      @Valid @RequestBody AnswerDto.AnswerPatchDto requestBody){

       answerPatchDto.setAnswerId(answerId);

        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(requestBody));

        AnswerDto.AnswerResponse response = mapper.answerToAnswerResponse(answer);

        return new ResponseEntity<>(response,HttpStatus.OK)
    }

    //answer 채택
    @PatchMapping
    public ResponseEntity patchAnswerAccepted(@PathVariable("questionId") long questionId,
                                              @PathVariable("answerId") long answerId,
                                              @Valid @RequestBody AnswerDto.AnswerAcceptPatch requestBody){

       answerService.acceptAnswer(requestBody.getMemberId(),questionId,answerId);

       return new ResponseEntity<>(HttpStatus.OK);

    }

    //answer 삭제
    @DeleteMapping
    public ResponseEntity deleteAnswer(@PathVariable("questionId") long questionId,
                                       @PathVariable("answerId")long answerId){
       answerService.deleteAnswer(answerId);

       return new ResponseEntity(HttpStatus.NO_CONTENT);

    }
}
