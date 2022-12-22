package seb41_pre_32.back.question.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import seb41_pre_32.back.tag.domain.Tag;
import seb41_pre_32.back.user.domain.User;

@Getter
@Setter
@Builder
public class QuestionResponseDto {
    private Long id;
    private String title;
    private String contents;
    private String attempt;
    private String tagName;
    private String name;
}
