package seb41_pre_32.back.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import seb41_pre_32.back.common.dto.ErrorResponse;
import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

@Slf4j
@RestControllerAdvice
public class ControllerAdvice {
    private static final String ERROR_MESSAGE = "[예외] : {}";

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResponse handleMethodArgumentNotValidException(final MethodArgumentNotValidException e) {
        log.error(ERROR_MESSAGE, e.getMessage());
        return new ErrorResponse(ErrorCode.REQUEST_ARGUMENT_NOT_VALID, e.getMessage());
    }

    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    @ExceptionHandler
    public ErrorResponse handleHttpRequestMethodNotSupportedException(final HttpRequestMethodNotSupportedException e) {
        log.error(ERROR_MESSAGE, e.getMessage());
        return new ErrorResponse(ErrorCode.METHOD_NOT_SUPPORTED, e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResponse handleHttpMessageNotReadableException(final HttpMessageNotReadableException e) {
        log.error(ERROR_MESSAGE, e.getMessage());
        return new ErrorResponse(ErrorCode.REQUEST_ARGUMENT_NOT_VALID, "요청 값의 본문이 잘못되었습니다.");
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResponse handleErrorLogicException(final ErrorLogicException e) {
        log.error(ERROR_MESSAGE, e.getErrorCode());
        return new ErrorResponse(e.getErrorCode(), e.getMessage());
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    public ErrorResponse handleException(final Exception e) {
        log.error(ERROR_MESSAGE, e.getMessage());
        return new ErrorResponse(ErrorCode.RUNTIME_ERROR, "예상치 못한 에러가 발생하였습니다.");
    }

}