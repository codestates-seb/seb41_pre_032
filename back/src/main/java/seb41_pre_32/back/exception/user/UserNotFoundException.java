package seb41_pre_32.back.exception.user;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class UserNotFoundException extends ErrorLogicException {

    public UserNotFoundException(Long userId) {
        super(ErrorCode.USER_NOT_FOUND, "해당 아이디의 유저가 존재하지 않습니다 : " + userId);
    }
}
