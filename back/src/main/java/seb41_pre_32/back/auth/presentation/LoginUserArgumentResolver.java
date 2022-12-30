package seb41_pre_32.back.auth.presentation;

import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;
import seb41_pre_32.back.auth.utils.AuthorizationExtractor;
import seb41_pre_32.back.auth.utils.JwtTokenizer;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

@RequiredArgsConstructor
public class LoginUserArgumentResolver implements HandlerMethodArgumentResolver {

    private final JwtTokenizer jwtTokenizer;

    @Override
    public boolean supportsParameter(final MethodParameter parameter) {
        return parameter.hasParameterAnnotation(LoginUser.class);
    }

    @Override
    public AuthInfo resolveArgument(final MethodParameter parameter,
                                    final ModelAndViewContainer mavContainer,
                                    final NativeWebRequest webRequest,
                                    final WebDataBinderFactory binderFactory) throws Exception {

        HttpServletRequest request = webRequest.getNativeRequest(HttpServletRequest.class);

        String accessToken = AuthorizationExtractor.getAccessToken(Objects.requireNonNull(request));
        if (accessToken == null) {
            return new AuthInfo(null, null, null, null);
        }

        return jwtTokenizer.parseClaimsToAuthInfo(accessToken);
    }
}
