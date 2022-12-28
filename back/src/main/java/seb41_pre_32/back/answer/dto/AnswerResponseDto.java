package seb41_pre_32.back.answer.dto;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.user.dto.UserResponseDto;

import java.time.LocalDateTime;

@Getter
public class AnswerResponseDto {
    private Long id;
    private String contents;
    private int likeCount;
    private int dislikeCount;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private UserResponseDto user;

    private AnswerResponseDto() {
    }

    @Builder
    public AnswerResponseDto(final Long id,
                             final String contents,
                             final int likeCount,
                             final int dislikeCount,
                             final LocalDateTime createdDate,
                             final LocalDateTime updatedDate,
                             final UserResponseDto user) {
        this.id = id;
        this.contents = contents;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.user = user;
    }

    public static AnswerResponseDto of(final Answer answer) {
        return AnswerResponseDto.builder()
                .id(answer.getAnswerId())
                .contents(answer.getContents())
                .likeCount(answer.getLikeCount())
                .dislikeCount(answer.getLikeCount())
                .createdDate(answer.getCreatedDate())
                .updatedDate(answer.getModifiedDate())
                .user(UserResponseDto.of(answer.getUser()))
                .build();
    }
}
