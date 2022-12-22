package seb41_pre_32.back.user.dto;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.user.domain.Role;
import seb41_pre_32.back.user.domain.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
public class UserPostRequest {

    @NotBlank(message = "로그인 아이디를 입력해 주세요.")
    private String loginId;
    @NotBlank(message = "사용자 이름을 입력해 주세요.")
    private String username;
    @NotBlank(message = "비밀번호를 입력해 주세요.")
    private String password;
    @NotNull(message = "이메일을 입력해 주세요.")
    @Email
    private String email;
    private String profileUrl;
    private String location;

    private UserPostRequest() {
    }

    @Builder
    public UserPostRequest(final String loginId,
                           final String username,
                           final String password,
                           final String email,
                           final String profileUrl,
                           final String location) {
        this.loginId = loginId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.profileUrl = profileUrl;
        this.location = location;
    }

    public User toUser() {
        return User.builder()
                .loginId(loginId)
                .username(username)
                .password(password)
                .email(email)
                .profileUrl(profileUrl)
                .location(location)
                .role(Role.USER)
                .build();
    }
}