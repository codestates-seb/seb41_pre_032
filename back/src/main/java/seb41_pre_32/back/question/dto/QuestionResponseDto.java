package seb41_pre_32.back.question.dto;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.tag.dto.TagResponseDto;
import seb41_pre_32.back.tag.entity.QuestionTag;
import seb41_pre_32.back.user.dto.UserResponseDto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class QuestionResponseDto {
    private Long id;
    private String title;
    private String contents;
    private String attempt;
    private List<TagResponseDto> tags;
    private UserResponseDto user;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private int answerCount;

    @Builder
    public QuestionResponseDto(final Long id, final String title,
                               final String contents, final String attempt,
                               final List<TagResponseDto> tags, final UserResponseDto user,
                               final LocalDateTime createdDate, final LocalDateTime updatedDate,
                               final int answerCount) {
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.attempt = attempt;
        this.tags = tags;
        this.user = user;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.answerCount = answerCount;
    }

    public static QuestionResponseDto of(final Question question) {
        List<QuestionTag> taglist = question.getTags();

        List<TagResponseDto> tags = taglist.stream()
                .map(t -> TagResponseDto.of(t))
                .collect(Collectors.toList());

        return QuestionResponseDto.builder()
                .id(question.getQuestionId())
                .title(question.getTitle())
                .contents(question.getContents())
                .attempt(question.getAttempt())
                .tags(tags)
                .createdDate(question.getCreatedDate())
                .updatedDate(question.getModifiedDate())
                .user(UserResponseDto.of(question.getUser()))
                .answerCount(question.getAnswerList().size())
                .build();
    }

    public void removeUser() {
        this.user = null;
    }
}
