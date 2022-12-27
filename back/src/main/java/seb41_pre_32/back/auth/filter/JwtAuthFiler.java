package seb41_pre_32.back.auth.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import seb41_pre_32.back.auth.dto.LoginRequest;
import seb41_pre_32.back.auth.jwt.JwtTokenizer;
import seb41_pre_32.back.user.entity.User;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
public class JwtAuthFiler extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {
        ObjectMapper mapper = new ObjectMapper();
        LoginRequest loginRequest = mapper.readValue(request.getInputStream(), LoginRequest.class);
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword());

        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        User user = (User) authResult.getPrincipal();

        response.setHeader("Authorization", "Bearer " + delegateAccessToken(user));
        response.setHeader("Refresh", delegateRefreshToken(user));

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }

    private String delegateAccessToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        claims.put("username", user.getEmail());
        claims.put("displayName", user.getUsername());
        claims.put("role", user.getRole().getValue());

        return jwtTokenizer.createAccessToken(claims, user.getEmail());
    }

    private String delegateRefreshToken(User user) {
        return jwtTokenizer.createRefreshToken(user.getEmail());
    }

}