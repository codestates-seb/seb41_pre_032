package seb41_pre_32.back.answer.domain.dto;

import jdk.dynalink.beans.StaticClass;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;


//답변 등록
public class AnswerDto {
    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerPostDto{

        @NotBlank(message = "답변 내용은 공백이 아니어야 합니다.")
        private String content;

    }

    //답변 수정
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerPatchDto{

        private long answerId;

        @NotBlank(message = "답변 내용은 공백이 아니어야 합니다.")
        private String content;
        public void setAnswerId(Long answerId){this.answerId=answerId;}
    }

    //답변 추천
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerVotePatch{

        private long answerId;

    }

    //답변 채택
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerAcceptPatch{

        private long answerId;

    }

    //답변 데이터를 담을 dto
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerResponse{
        private long answerId;
        private String content;
        private int voteCount;  //추천수
        private int isAccepted; //채택되었는지 여부
        private AnswerMemberResponse member;
        private LocalDataTime createdAt;
        private LocalDateTime updatedAt;
    }

    //답변 추천,비추천 데이터 담는 dto
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerVoteResponse{
        //-1,0,1 로 상태 표시
        private int voteCount;
        private int voteCheck;
        @Builder.Default
        private Boolean isUpVoter = false;
        private Boolean isDownVoter = false;
    }

    //답변 response에 돌려줄 member의 정보를 위한 dto
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerMemberResponse{
        private String name;
        private String email;
        private String image;
    }

    //답변 response에 채택여부를 담는 dto
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AnswerAcceptResponse{
        private int isAccepted;
    }
}
