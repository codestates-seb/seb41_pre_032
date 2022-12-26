package seb41_pre_32.back.question.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
public class QuestionResponseDto {
    private Long id;
    private String title;
    private String contents;
    private String attempt;
    private List<String> tags = new ArrayList<>();
    private String username;
}
