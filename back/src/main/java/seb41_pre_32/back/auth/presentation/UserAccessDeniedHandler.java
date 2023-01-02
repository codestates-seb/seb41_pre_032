package seb41_pre_32.back.auth.presentation;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import seb41_pre_32.back.auth.utils.ErrorResponseUtils;
import seb41_pre_32.back.exception.ErrorCode;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(final HttpServletRequest request,
                       final HttpServletResponse response,
                       final AccessDeniedException accessDeniedException) throws IOException, ServletException {
        ErrorResponseUtils.sendErrorResponse(ErrorCode.ACCESS_FORBIDDEN, response, HttpStatus.FORBIDDEN);
        log.warn("AccessDenied Exception: {}", accessDeniedException.getMessage());
    }
}
