package seb41_pre_32.back.question.domain.dto;

import lombok.Getter;
import seb41_pre_32.back.tag.domain.Tag;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPostDto {
    @NotBlank
    private String title;

    @NotBlank
    private String contents;

    @NotBlank
    private String attempt;

    @NotBlank
    private String tagName;

    @NotBlank
    private String name;
}
