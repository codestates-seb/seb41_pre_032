package seb41_pre_32.back.user.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class UserPatchRequest {
    private String displayName;
    private String profileUrl;
    private String location;

    @Builder
    public UserPatchRequest(final String displayName,
                            final String profileUrl,
                            final String location) {
        this.displayName = displayName;
        this.profileUrl = profileUrl;
        this.location = location;
    }
}