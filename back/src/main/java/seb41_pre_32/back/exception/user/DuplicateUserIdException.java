package seb41_pre_32.back.exception.user;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class DuplicateUserIdException extends ErrorLogicException {

    public DuplicateUserIdException() {
        super(ErrorCode.DUPLICATED_USER_ID, "해당 아이디는 이미 사용 중입니다.");
    }
}
