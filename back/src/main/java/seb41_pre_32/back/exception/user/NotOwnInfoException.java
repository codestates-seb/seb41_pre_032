package seb41_pre_32.back.exception.user;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class NotOwnInfoException extends ErrorLogicException {

    public NotOwnInfoException() {
        super(ErrorCode.BAD_ACCESS_USER_INFO, "다른 유저 정보에 접근할 수 없습니다.");
    }
}
