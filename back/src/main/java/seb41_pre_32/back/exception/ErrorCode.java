package seb41_pre_32.back.exception;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ErrorCode {

    //GLOBAL
    REQUEST_ARGUMENT_NOT_VALID("REQUEST_ARGUMENT_NOT_VALID"),
    METHOD_NOT_SUPPORTED("METHOD_NOT_SUPPORTED"),
    RUNTIME_ERROR("RUNTIME_ERROR"),

    // USER
    DUPLICATED_USER_EMAIL("DUPLICATED_USER_EMAIL"),
    USER_NOT_FOUND("USER_NOT_FOUND"),
    UNAUTHORIZED_USER_ACCESS("UNAUTHORIZED_USER_ACCESS"),

    // AUTH
    UNAUTHORIZED_USER("UNAUTHORIZED_USER"),
    LOGIN_FAILED("LOGIN_FAILED"),
    ACCESS_FORBIDDEN("ACCESS_FORBIDDEN"),
    EXPIRED_TOKEN("EXPIRED_TOKEN"),
    NOT_VALID_TOKEN("NOT_VALID_TOKEN"),

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
