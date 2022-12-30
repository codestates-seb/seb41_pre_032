package seb41_pre_32.back.auth.utils;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;

@Component
public class JwtTokenizer {
    private final SecretKey secretKey;
    private final long accessTokenExpirationMills;
    private final long refreshTokenExpirationMills;

    public JwtTokenizer(@Value("${spring.security.jwt.token.secret-key}") final String secretKey,
                        @Value("${spring.security.jwt.token.access-expire-time}") final long accessTokenExpirationMills,
                        @Value("${spring.security.jwt.token.refresh-expire-time}") final long refreshTokenExpirationMills) {
        this.secretKey = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
        this.accessTokenExpirationMills = accessTokenExpirationMills;
        this.refreshTokenExpirationMills = refreshTokenExpirationMills;
    }

    public String createAccessToken(final Map<String, Object> claims, final String subject) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + (accessTokenExpirationMills * 1000));

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }

    public String createRefreshToken(final String subject) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + (refreshTokenExpirationMills * 1000));

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }

    // 검증 후 claims 반환
    public Jws<Claims> getClaims(final String jws) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(jws);
    }

    public AuthInfo parseClaimsToAuthInfo(final String token) {
        Claims claims;
        try {
            claims = getClaims(token).getBody();
        } catch (ExpiredJwtException ex) {
            Long userId = ex.getClaims().get("userId", Long.class);
            String email = ex.getClaims().get("username", String.class);
            String displayName = ex.getClaims().get("displayName", String.class);
            String role = ex.getClaims().get("role", String.class);
            return new AuthInfo(userId, email, displayName, role);
        }

        Long userId = claims.get("userId", Long.class);
        String email = claims.get("username", String.class);
        String displayName = claims.get("displayName", String.class);
        String role = claims.get("role", String.class);
        return new AuthInfo(userId, email, displayName, role);
    }
}