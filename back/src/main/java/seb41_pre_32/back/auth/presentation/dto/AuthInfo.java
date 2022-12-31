package seb41_pre_32.back.auth.presentation.dto;

import lombok.Getter;

@Getter
public class AuthInfo {
    private Long userId;
    private String email;
    private String displayName;
    private String role;

    public AuthInfo(final Long userId,
                    final String email,
                    final String displayName,
                    final String role) {
        this.userId = userId;
        this.email = email;
        this.displayName = displayName;
        this.role = role;
    }
}
