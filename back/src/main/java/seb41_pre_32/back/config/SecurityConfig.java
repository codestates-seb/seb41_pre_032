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
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import seb41_pre_32.back.auth.filter.JwtAuthFiler;
import seb41_pre_32.back.auth.filter.JwtVerifyFilter;
import seb41_pre_32.back.auth.handler.UserAccessDeniedHandler;
import seb41_pre_32.back.auth.handler.UserAuthenticationEntryPoint;
import seb41_pre_32.back.auth.handler.UserAuthenticationFailureHandler;
import seb41_pre_32.back.auth.handler.UserAuthenticationSuccessHandler;
import seb41_pre_32.back.auth.jwt.JwtTokenizer;
import seb41_pre_32.back.auth.utils.CustomAuthorityUtils;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(final HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf().disable()
                .headers().frameOptions().disable()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfig())
                .and()
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
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    public class CustomFilterConfig extends AbstractHttpConfigurer<CustomFilterConfig, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthFiler jwtAuthFiler = new JwtAuthFiler(authenticationManager, jwtTokenizer);
            jwtAuthFiler.setFilterProcessesUrl("/api/login");
            jwtAuthFiler.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthFiler.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerifyFilter jwtVerifyFilter = new JwtVerifyFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthFiler)
                    .addFilterAfter(jwtVerifyFilter, JwtAuthFiler.class);
        }
    }
}
