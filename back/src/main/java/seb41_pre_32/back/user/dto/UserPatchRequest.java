package seb41_pre_32.back.user.dto;

import lombok.Getter;

@Getter
public class UserPatchRequest {
    private String username;
    private String profileUrl;
    private String location;

    private UserPatchRequest() {
    }

    public UserPatchRequest(final String username,
                            final String profileUrl,
                            final String location) {
        this.username = username;
        this.profileUrl = profileUrl;
        this.location = location;
    }
}