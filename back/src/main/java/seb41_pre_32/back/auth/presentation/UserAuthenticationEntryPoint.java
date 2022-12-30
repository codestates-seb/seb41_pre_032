package seb41_pre_32.back.auth.presentation;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import seb41_pre_32.back.auth.utils.ErrorResponseUtils;
import seb41_pre_32.back.exception.ErrorCode;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
public class UserAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        Exception exception = (Exception) request.getAttribute("exception");
        String message = exception == null ? authException.getMessage() : exception.getMessage();

        ErrorResponseUtils.sendErrorResponse(ErrorCode.UNAUTHORIZED_USER, response, HttpStatus.UNAUTHORIZED);

        log.warn("Unauthorized Exception : {}", message);
    }
}
