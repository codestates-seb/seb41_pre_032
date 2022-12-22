package seb41_pre_32.back.question.domain.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
public class QuestionPatchDto {
    @NotBlank
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String contents;

    private String attempt;

    // todo : 태그를 수정할 땐 태그 pk인 태그 id들을 받아와야 하므로 Long 리스트로 받아야 합니다.
    //        받아온 태그 아이디로 태그 엔티티를 조회해서 Question 엔티티에 넣어주는 방식으로 수정해야 합니다.
    private List<Long> tags;
}
