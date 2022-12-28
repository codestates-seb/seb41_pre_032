package seb41_pre_32.back.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPostDto {
    @NotBlank(message = "질문 아이디 값은 필수 값 입니다.")
    private String questionId;

    @NotBlank(message = "답변 내용은 공백이 아니어야 합니다.")
    private String contents;
}
