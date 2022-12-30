package seb41_pre_32.back.auth.presentation;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import seb41_pre_32.back.auth.utils.CustomAuthorityUtils;
import seb41_pre_32.back.auth.utils.JwtTokenizer;
import seb41_pre_32.back.user.entity.User;
import seb41_pre_32.back.user.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Component
public class Oauth2UserAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final UserService userService;
    private final CustomAuthorityUtils customAuthorityUtils;

    @Override
    public void onAuthenticationSuccess(final HttpServletRequest request,
                                        final HttpServletResponse response,
                                        final Authentication authentication) throws IOException, ServletException {

        var oAuth2User = (OAuth2User) authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        User googleUser = userService.createGoogleUser(email);

        redirect(request, response, email, googleUser);
    }

    private void redirect(final HttpServletRequest request,
                          final HttpServletResponse response,
                          final String username,
                          final User user) throws IOException {

        response.setHeader("Authorization", "Bearer " + delegateAccessToken(user));
        response.setHeader("Refresh", delegateRefreshToken(username));

        String uri = createURI().toString();
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

    private String delegateAccessToken(final User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        claims.put("username", user.getEmail());
        claims.put("role", "USER");
        setAuthToContextHolder(claims);

        return jwtTokenizer.createAccessToken(claims, user.getEmail());
    }

    private String delegateRefreshToken(final String username) {
        return jwtTokenizer.createRefreshToken(username);
    }

    private URI createURI() {
        return UriComponentsBuilder
                .newInstance()
                .host("")
                .port(8080)
                .scheme("http://ec2-3-35-204-189.ap-northeast-2.compute.amazonaws.com")
                .path("/api/login/google")
                .build()
                .toUri();
    }

    private void setAuthToContextHolder(final Map<String, Object> claims) {
        String username = (String) claims.get("username");
        List<GrantedAuthority> authorities = customAuthorityUtils.createAuthorities((String) claims.get("role"));

        Authentication authentication
                = new UsernamePasswordAuthenticationToken(username, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}