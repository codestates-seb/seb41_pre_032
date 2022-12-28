package seb41_pre_32.back.question.dto;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.tag.dto.TagResponseDto;
import seb41_pre_32.back.tag.entity.QuestionTag;
import seb41_pre_32.back.user.dto.UserResponseDto;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
public class QuestionResponseDto {
    private Long id;
    private String title;
    private String contents;
    private String attempt;
    private List<TagResponseDto> tags;
    private UserResponseDto user;


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
                .user(UserResponseDto.of(question.getUser()))
                .build();
    }

    public void removeUser(){
        this.user = null;
    }
}
