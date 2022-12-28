package seb41_pre_32.back.exception.auth;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class AccessForbiddenException extends ErrorLogicException {

    public AccessForbiddenException() {
        super(ErrorCode.ACCESS_FORBIDDEN, "해당 기능에 대한 접근 권한이 없습니다.");
    }
}
