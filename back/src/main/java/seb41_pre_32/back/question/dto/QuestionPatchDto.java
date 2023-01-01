package seb41_pre_32.back.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class QuestionPatchDto {
    @NotBlank
    private String title;
    @NotBlank
    private String contents;
    private String attempt;


    @Builder
    public QuestionPatchDto(final String title,
                            final String contents,
                            final String attempt) {
        this.title = title;
        this.contents = contents;
        this.attempt = attempt;
    }
}
