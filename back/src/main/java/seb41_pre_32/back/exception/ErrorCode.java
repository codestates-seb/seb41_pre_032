package seb41_pre_32.back.exception;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ErrorCode {

    // USER
    DUPLICATED_USER_EMAIL("DUPLICATED_USER_EMAIL"),
    USER_NOT_FOUND("USER_NOT_FOUND"),
    BAD_ACCESS_USER_INFO("BAD_ACCESS_USER_INFO"),

    // AUTH
    UNAUTHORIZED_USER("UNAUTHORIZED_USER"),
    LOGIN_FAILED("LOGIN_FAILED"),
    ACCESS_FORBIDDEN("ACCESS_FORBIDDEN"),
    EXPIRED_TOKEN("EXPIRED_TOKEN"),

    //QUESTION
    QUESTION_NOT_FOUND("QUESTION_NOT_FOUND"),

    //ANSWER
    ANSWER_NOT_FOUND("ANSWER_NOT_FOUND");

    private final String value;

    ErrorCode(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
