package seb41_pre_32.back.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import seb41_pre_32.back.auth.jwt.JwtTokenizer;
import seb41_pre_32.back.auth.utils.LoginUserArgumentResolver;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private static final String ALLOWED_METHOD = "POST,GET,PATCH,DELETE";
    private static final String DEPLOY_SERVER = "http://ec2-3-35-204-189.ap-northeast-2.compute.amazonaws.com:8080";
    private static final String FRONTEND_SERVER = "http://pre-project-32-front.s3-website.ap-northeast-2.amazonaws.com";
    private final JwtTokenizer jwtTokenizer;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("*")
                .allowedHeaders("*")
                .allowedMethods(ALLOWED_METHOD.split(","))
                .allowCredentials(false)
                .exposedHeaders(HttpHeaders.LOCATION, HttpHeaders.AUTHORIZATION, "Refresh");
    }

    // todo : 최종 배포 전 적용
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/api/**")
//                .allowedMethods(ALLOWED_METHOD.split(","))
//                .allowedOrigins(DEPLOY_SERVER, FRONTEND_SERVER)
//                .exposedHeaders(HttpHeaders.LOCATION, HttpHeaders.AUTHORIZATION, "Refresh");
//    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new LoginUserArgumentResolver(jwtTokenizer));
    }
}
