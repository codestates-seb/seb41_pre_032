package seb41_pre_32.back.user.dto;

import lombok.Getter;

@Getter
public class UserPatchRequest {
    private String displayName;
    private String profileUrl;
    private String location;
}