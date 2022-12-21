package seb41_pre_32.back.question.domain.dto;

import lombok.Getter;
import lombok.Setter;
import seb41_pre_32.back.tag.domain.Tag;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class QuestionPatchDto {
    @NotBlank
    private Long questionId;

    @NotBlank
    private String title;

    @NotBlank
    private String contents;

    @NotBlank
    private String attempt;

    @NotBlank
    private Tag tags;
}
