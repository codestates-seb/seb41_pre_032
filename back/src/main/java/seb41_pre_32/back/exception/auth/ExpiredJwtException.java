package seb41_pre_32.back.exception.auth;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class ExpiredJwtException extends ErrorLogicException {

    public ExpiredJwtException() {
        super(ErrorCode.EXPIRED_TOKEN, "해당 토큰은 만료된 토큰입니다.");
    }
}
