package seb41_pre_32.back.auth.presentation;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import seb41_pre_32.back.auth.utils.ErrorResponseUtils;
import seb41_pre_32.back.exception.ErrorCode;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        ErrorResponseUtils.sendErrorResponse(ErrorCode.LOGIN_FAILED, response, HttpStatus.UNAUTHORIZED);
        log.error("Authentication failed : {}", exception.getMessage());
    }
}
