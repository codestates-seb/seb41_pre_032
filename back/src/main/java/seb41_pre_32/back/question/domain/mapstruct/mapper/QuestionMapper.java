package seb41_pre_32.back.question.domain.mapstruct.mapper;

import org.mapstruct.Mapper;
import seb41_pre_32.back.question.domain.dto.QuestionPatchDto;
import seb41_pre_32.back.question.domain.dto.QuestionPostDto;
import seb41_pre_32.back.question.domain.dto.QuestionResponseDto;
import seb41_pre_32.back.question.domain.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        return QuestionResponseDto.builder()
                .id(question.getId())
                .title(question.getTitle())
                .contents(question.getContents())
                .attempt(question.getAttempt())
                .username(question.getUser().getUsername())
                .build();

        //todo : 태그는 나중에 태그 이름 리스트로 받아와서 변환해야 합니다.
    }

}
