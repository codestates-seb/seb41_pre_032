package seb41_pre_32.back.auth.dto;

import lombok.Getter;

@Getter
public class AuthInfo {
    private Long userId;
    private String displayName;
    private String email;
    private String role;

    public AuthInfo(final Long userId,
                    final String displayName,
                    final String email,
                    final String role) {
        this.userId = userId;
        this.displayName = displayName;
        this.email = email;
        this.role = role;
    }
}
