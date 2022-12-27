package seb41_pre_32.back.auth.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class LoginRequest {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
