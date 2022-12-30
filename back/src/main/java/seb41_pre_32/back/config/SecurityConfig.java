package seb41_pre_32.back.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import seb41_pre_32.back.auth.presentation.*;
import seb41_pre_32.back.auth.presentation.filter.JwtAuthFiler;
import seb41_pre_32.back.auth.presentation.filter.JwtVerifyFilter;
import seb41_pre_32.back.auth.utils.JwtTokenizer;
import seb41_pre_32.back.auth.utils.CustomAuthorityUtils;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final Oauth2UserAuthenticationSuccessHandler oauth2UserAuthenticationSuccessHandler;

    @Bean
    public SecurityFilterChain filterChain(final HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .headers()
                    .frameOptions()
                    .disable()
                .and()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin()
                    .disable()
                .httpBasic()
                    .disable()
                .cors()
                    .configurationSource(corsConfigurationSource())
                .and()
                .csrf()
                    .disable()
                .exceptionHandling()
                    .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                    .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfig())
                .and()
                .oauth2Login(oauth2 -> oauth2.successHandler(oauth2UserAuthenticationSuccessHandler))
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/api/users").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/users/**", "/api/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/api/users/**", "/api/questions/**", "/api/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/api/questions", "/api/answers").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/users", "/api/questions", "/api/answers").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/api/users/**", "/api/questions/**", "/api/answers/**").hasRole("USER")
                        .anyRequest().permitAll()
                ).build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);
        configuration.setExposedHeaders(List.of("Authorization", "Refresh"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfig extends AbstractHttpConfigurer<CustomFilterConfig, HttpSecurity> {
        @Override
        public void configure(final HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthFiler jwtAuthFiler = new JwtAuthFiler(authenticationManager, jwtTokenizer);
            jwtAuthFiler.setFilterProcessesUrl("/api/login");
            jwtAuthFiler.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthFiler.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerifyFilter jwtVerifyFilter = new JwtVerifyFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthFiler)
                    .addFilterAfter(jwtVerifyFilter, JwtAuthFiler.class)
                    .addFilterAfter(jwtVerifyFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
