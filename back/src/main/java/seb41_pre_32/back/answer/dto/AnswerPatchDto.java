package seb41_pre_32.back.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPatchDto {
    @NotBlank(message = "내용을 입력해 주세요.")
    private String contents;

    private AnswerPatchDto() {
    }

    public AnswerPatchDto(final String contents) {
        this.contents = contents;
    }
}
