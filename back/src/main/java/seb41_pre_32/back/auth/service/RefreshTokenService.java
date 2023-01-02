package seb41_pre_32.back.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.auth.domain.entity.RefreshToken;
import seb41_pre_32.back.auth.domain.repository.RefreshTokenRepository;
import seb41_pre_32.back.auth.utils.JwtTokenizer;
import seb41_pre_32.back.exception.auth.InvalidRefreshTokenException;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RefreshTokenService {

    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtTokenizer jwtTokenizer;

    @Transactional
    public void saveRefreshToken(String token, Long userId) {
        deleteRefreshToken(userId);
        refreshTokenRepository.save(new RefreshToken(userId, token));
    }

    @Transactional
    public void deleteRefreshToken(Long userId) {
        refreshTokenRepository.deleteAllByUserId(userId);
    }

    @Transactional
    public void validateRefreshToken(String token, Long userId) {
        RefreshToken refreshToken = refreshTokenRepository.findByUserId(userId)
                .orElseThrow(() -> new InvalidRefreshTokenException());

        if (!token.equals(refreshToken.getValue()) || !jwtTokenizer.isValidToken(token)) {
            refreshTokenRepository.delete(refreshToken);
            throw new InvalidRefreshTokenException();
        }
    }


}
