package seb41_pre_32.back.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
public class QuestionPatchDto {
    @NotBlank
    private String title;
    @NotBlank
    private String contents;
    private String attempt;
}
