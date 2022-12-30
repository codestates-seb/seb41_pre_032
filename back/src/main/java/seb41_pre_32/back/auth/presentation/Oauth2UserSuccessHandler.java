package seb41_pre_32.back.auth.presentation;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import seb41_pre_32.back.auth.utils.CustomAuthorityUtils;
import seb41_pre_32.back.auth.utils.JwtTokenizer;
import seb41_pre_32.back.user.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Component
public class Oauth2UserSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final UserService userService;
    @Override
    public void onAuthenticationSuccess(final HttpServletRequest request,
                                        final HttpServletResponse response,
                                        final Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User) authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        userService.createGoogleUser(email);

        redirect(request, response, email);
    }

    private void redirect(final HttpServletRequest request,
                          final HttpServletResponse response,
                          final String username) throws IOException {

        response.setHeader("Authorization", "Bearer " + delegateAccessToken(username));
        response.setHeader("Refresh", delegateRefreshToken(username));

        String uri = createURI().toString();
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

    private String delegateAccessToken(final String username) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("role", "USER");

        return jwtTokenizer.createAccessToken(claims, username);
    }

    private String delegateRefreshToken(final String username) {
        return jwtTokenizer.createRefreshToken(username);
    }

    private URI createURI() {
        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
                .port(8080)
                .path("/api/login/google")
                .build()
                .toUri();
    }
}