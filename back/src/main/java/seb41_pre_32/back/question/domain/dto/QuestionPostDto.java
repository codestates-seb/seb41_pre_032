package seb41_pre_32.back.question.domain.dto;

import lombok.Getter;
import seb41_pre_32.back.question.domain.entity.Question;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class QuestionPostDto {
    // todo : 유저 식별자 아이디 값이 꼭 필요합니다.
    @NotBlank
    private String userId;

    @NotBlank
    private String title;

    @NotBlank
    private String contents;

    // todo : 시도한 내용과 태그는 필수값이 아니어도 될 것 같습니다.
    private String attempt;

    // todo : 태그는 여러 개가 존재 할 수 있으므로 List로 받아와야 합니다.
    private List<String> taglist;

    public Question toQuestion() {
        return Question.builder()
                .title(title)
                .contents(contents)
                .attempt(attempt)
                .build();
    }

}
