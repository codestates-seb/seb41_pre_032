package seb41_pre_32.back.exception;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ErrorCode {

    // USER
    DUPLICATED_USER_ID("1001"),
    DUPLICATED_USER_EMAIL("1002"),
    USER_NOT_FOUND("1003");

    //QUESTION


    //ANSWER

    private final String code;

    ErrorCode(String code) {
        this.code = code;
    }

    @JsonValue
    public String getCode() {
        return code;
    }
}
