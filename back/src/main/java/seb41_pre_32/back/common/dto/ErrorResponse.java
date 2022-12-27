package seb41_pre_32.back.common.dto;

import lombok.Getter;
import seb41_pre_32.back.exception.ErrorCode;

@Getter
public class ErrorResponse {

    private ErrorCode errorCode;
    private String message;

    private ErrorResponse() {
    }

    public ErrorResponse(ErrorCode errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}
