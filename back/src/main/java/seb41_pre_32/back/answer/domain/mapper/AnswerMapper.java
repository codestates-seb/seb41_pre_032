package seb41_pre_32.back.answer.domain.mapper;

import seb41_pre_32.back.answer.domain.dto.AnswerDto;
import seb41_pre_32.back.answer.domain.entity.Answer;

public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerDto.AnswerPatchDto answerPatchDto);

    AnswerDto.AnswerResponse answerToAnswerResponse(Answer answer);
}
