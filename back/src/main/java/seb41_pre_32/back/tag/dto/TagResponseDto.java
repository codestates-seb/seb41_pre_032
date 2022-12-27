package seb41_pre_32.back.tag.dto;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.tag.entity.Question_Tag;

@Getter
public class TagResponseDto {
    private String tagName;

    @Builder
    public TagResponseDto(String tagName) {
        this.tagName = tagName;
    }

    public static TagResponseDto of(final Question_Tag tag) {
        return TagResponseDto.builder()
                .tagName(tag.getTag().getTagName())
                .build();
    }
}