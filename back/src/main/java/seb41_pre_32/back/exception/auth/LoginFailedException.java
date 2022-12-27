package seb41_pre_32.back.exception.auth;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class LoginFailedException extends ErrorLogicException {

    public LoginFailedException() {
        super(ErrorCode.LOGIN_FAILED, "로그인에 실패하였습니다.");
    }
}
