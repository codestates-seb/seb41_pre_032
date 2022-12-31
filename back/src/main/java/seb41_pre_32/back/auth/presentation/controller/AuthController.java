package seb41_pre_32.back.auth.presentation.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb41_pre_32.back.auth.presentation.LoginUser;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;
import seb41_pre_32.back.auth.service.RefreshTokenService;
import seb41_pre_32.back.auth.utils.JwtTokenizer;
import seb41_pre_32.back.exception.auth.ExtractTokenFailedException;

import javax.servlet.ServletException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final RefreshTokenService refreshTokenService;
    private final JwtTokenizer jwtTokenizer;

    @GetMapping("/login/google")
    public String loginGoogle() {
        return "구글 로그인 성공";
    }

    @GetMapping("/refresh")
    public ResponseEntity<Void> refresh(@RequestHeader(value = "Refresh") final String refreshToken,
                                        @LoginUser AuthInfo authInfo) throws ServletException {
        if (StringUtils.isEmpty(refreshToken)) {
            throw new ExtractTokenFailedException();
        }

        refreshTokenService.validateRefreshToken(refreshToken, authInfo.getUserId());
        String accessToken = delegateAccessToken(authInfo);

        return ResponseEntity.noContent()
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .build();
    }

    @GetMapping("/logout")
    public ResponseEntity<Void> logout(@LoginUser final AuthInfo authInfo) {
        refreshTokenService.deleteRefreshToken(authInfo.getUserId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private String delegateAccessToken(final AuthInfo authInfo) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", authInfo.getUserId());
        claims.put("username", authInfo.getEmail());
        claims.put("displayName", authInfo.getDisplayName());
        claims.put("role", authInfo.getRole());
        return jwtTokenizer.createAccessToken(claims, authInfo.getEmail());
    }

}