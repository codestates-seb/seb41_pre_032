package seb41_pre_32.back.exception.auth;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class ExtractTokenFailedException extends ErrorLogicException {

    public ExtractTokenFailedException() {
        super(ErrorCode.NOT_VALID_TOKEN, "엑세스 토큰이 잘못되었습니다.");
    }
}
