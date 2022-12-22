package seb41_pre_32.back.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import seb41_pre_32.back.config.dto.ErrorResponse;
import seb41_pre_32.back.exception.ErrorLogicException;

@Slf4j
@RestControllerAdvice
public class ControllerAdvice {
    private static final String ERROR_MESSAGE = "[예외 발생] : {}";

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResponse handleBadRequestException(final ErrorLogicException e) {
        log.error(ERROR_MESSAGE, e.getErrorCode());
        return new ErrorResponse(e.getErrorCode(), e.getMessage());
    }


}
