package seb41_pre_32.back.tag.dto;

import lombok.Getter;
import seb41_pre_32.back.tag.entity.QuestionTag;

@Getter
public class TagResponseDto {
    private String tagName;

    private TagResponseDto() {
    }

    public TagResponseDto(String tagName) {
        this.tagName = tagName;
    }

    public static TagResponseDto of(final QuestionTag tag) {
        return new TagResponseDto(tag.getTag().getTagName());
    }
}
