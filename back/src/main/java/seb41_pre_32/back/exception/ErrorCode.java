package seb41_pre_32.back.exception;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ErrorCode {

    // USER
    DUPLICATED_USER_ID("DUPLICATED_USER_ID"),
    DUPLICATED_USER_EMAIL("DUPLICATED_USER_EMAIL"),
    USER_NOT_FOUND("USER_NOT_FOUND"),

    // LOGIN
    EXPIRED_TOKEN("EXPIRED_TOKEN");


    //QUESTION

    //ANSWER

    private final String value;

    ErrorCode(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
