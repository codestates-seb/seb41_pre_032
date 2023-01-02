package seb41_pre_32.back.user.dto;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.user.entity.Role;
import seb41_pre_32.back.user.entity.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class UserPostRequest {
    @NotBlank(message = "사용자 이름을 입력해 주세요.")
    private String displayName;

    @Email
    @NotBlank(message = "이메일을 입력해 주세요.")
    private String email;

    @NotBlank(message = "비밀번호를 입력해 주세요.")
    private String password;

    private UserPostRequest() {
    }

    @Builder
    public UserPostRequest(final String displayName,
                           final String email,
                           final String password) {
        this.displayName = displayName;
        this.password = password;
        this.email = email;
    }

    public User toUser() {
        return User.builder()
                .username(displayName)
                .password(password)
                .email(email)
                .role(Role.USER)
                .build();
    }
}