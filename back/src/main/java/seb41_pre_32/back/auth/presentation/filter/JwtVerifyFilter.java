package seb41_pre_32.back.auth.presentation.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import seb41_pre_32.back.auth.utils.JwtTokenizer;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@RequiredArgsConstructor
public class JwtVerifyFilter extends OncePerRequestFilter {

    private final JwtTokenizer jwtTokenizer;

    @Override
    protected void doFilterInternal(final HttpServletRequest request,
                                    final HttpServletResponse response,
                                    final FilterChain filterChain) throws ServletException, IOException {
        try {
            Map<String, Object> claims = verifyJws(request);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException je) {
            request.setAttribute("exception", je);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }
        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(final HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");
        String refresh = request.getHeader("Refresh");
        return !StringUtils.hasText(refresh) || !StringUtils.hasText(authorization) || !authorization.startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(final HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        return jwtTokenizer.getClaims(jws).getBody();
    }
}
