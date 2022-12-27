package seb41_pre_32.back.auth.utils;

import org.springframework.http.HttpHeaders;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

public class AuthorizationExtractor {

    private static final String PRE_FIX = "Bearer";

    private AuthorizationExtractor() {
    }

    public static String getAccessToken(HttpServletRequest request) {
        Enumeration<String> headers = request.getHeaders(HttpHeaders.AUTHORIZATION);
        return extract(headers);
    }

    public static String extract(Enumeration<String> headers) {
        while (headers.hasMoreElements()) {
            String val = headers.nextElement();
            if ((val.toLowerCase().startsWith(PRE_FIX.toLowerCase()))) {
                String authHeader = val.substring(PRE_FIX.length()).trim();
                int commaPos = authHeader.indexOf(',');
                if (commaPos > 0) {
                    authHeader = authHeader.substring(0, commaPos);
                }
                return authHeader;
            }
        }
        return null;
    }
}
