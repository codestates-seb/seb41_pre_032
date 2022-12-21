package seb41_pre_32.back.exception.user;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class DuplicateUserEmailException extends ErrorLogicException {

    public DuplicateUserEmailException() {
        super(ErrorCode.DUPLICATED_USER_EMAIL, "해당 이메일은 이미 가입된 이메일입니다.");
    }
}
