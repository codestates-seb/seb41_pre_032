package seb41_pre_32.back.question.dto;

import lombok.Getter;
import seb41_pre_32.back.question.entity.Question;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class QuestionPostDto {
    @NotBlank
    private String title;
    @NotBlank
    private String contents;
    private String attempt;
    private List<String> taglist;

    public Question toQuestion() {
        return Question.builder()
                .title(title)
                .contents(contents)
                .attempt(attempt)
                .build();
    }

}
