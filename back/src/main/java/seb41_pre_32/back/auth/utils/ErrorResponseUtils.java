package seb41_pre_32.back.auth.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import seb41_pre_32.back.common.dto.ErrorResponse;
import seb41_pre_32.back.exception.ErrorCode;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ErrorResponseUtils {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static void sendErrorResponse(final ErrorCode errorCode,
                                         final HttpServletResponse response,
                                         final HttpStatus status) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());

        ErrorResponse errorResponse = new ErrorResponse(errorCode, errorCode.getValue());
        String errorResponseString = objectMapper.writeValueAsString(errorResponse);
        response.getWriter().write(errorResponseString);
    }
}
