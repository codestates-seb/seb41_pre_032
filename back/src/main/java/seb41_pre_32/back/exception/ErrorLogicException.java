package seb41_pre_32.back.exception;

import lombok.Getter;

@Getter
public class ErrorLogicException extends RuntimeException {
    private final ErrorCode errorCode;

    public ErrorLogicException(final ErrorCode errorCode, final String message) {
        super(message);
        this.errorCode = errorCode;
    }
}
