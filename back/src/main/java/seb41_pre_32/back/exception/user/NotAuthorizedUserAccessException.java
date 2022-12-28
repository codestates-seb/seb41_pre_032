package seb41_pre_32.back.exception.user;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class NotAuthorizedUserAccessException extends ErrorLogicException {

    public NotAuthorizedUserAccessException() {
        super(ErrorCode.UNAUTHORIZED_USER_ACCESS, "해당 유저에게 권한이 없는 잘못된 접근입니다.");
    }
}
