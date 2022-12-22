package seb41_pre_32.back.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtTokenizer {
    private final SecretKey secretKey;
    private final long accessTokenExpirationMills;
    private final long refreshTokenExpirationMills;

    public JwtTokenizer(@Value("${security.jwt.token.secret-key}") final String secretKey,
                        @Value("${security.jwt.token.access-expire-time}") final long accessTokenExpirationMills,
                        @Value("${security.jwt.token.refresh-expire-time}") final long refreshTokenExpirationMills) {
        this.secretKey = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
        this.accessTokenExpirationMills = accessTokenExpirationMills;
        this.refreshTokenExpirationMills = refreshTokenExpirationMills;
    }

    public String createAccessToken(final String payload) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + accessTokenExpirationMills);

        return Jwts.builder()
                .setSubject(payload)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }

    public String createRefreshToken(final String payload) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + refreshTokenExpirationMills);

        return Jwts.builder()
                .setSubject(payload)
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

    // payload 반환
    public String getPayload(final String jws) {
        return getClaims(jws)
                .getBody()
                .getSubject();
    }

    // jws 검증
    public void verifySignature(final String jws) {

    }


}
