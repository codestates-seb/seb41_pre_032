package seb41_pre_32.back.common.dto;

import lombok.Getter;
import seb41_pre_32.back.exception.ErrorCode;

@Getter
public class ErrorResponse {

    private ErrorCode code;
    private String message;

    private ErrorResponse() {
    }

    public ErrorResponse(final ErrorCode code, final String message) {
        this.code = code;
        this.message = message;
    }
}
