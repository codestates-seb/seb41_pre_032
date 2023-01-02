package seb41_pre_32.back.exception.auth;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class InvalidRefreshTokenException extends ErrorLogicException {

    public InvalidRefreshTokenException() {
        super(ErrorCode.NOT_VALID_TOKEN, "리프레시 토큰이 잘못되었습니다.");
    }
}
