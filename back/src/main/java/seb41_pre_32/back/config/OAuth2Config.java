package seb41_pre_32.back.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;

@Configuration
public class OAuth2Config {
    private final String clientId;
    private final String clientSecret;

    public OAuth2Config(@Value("${spring.security.oauth2.client.registration.google.client-id}") final String clientId,
                        @Value("${spring.security.oauth2.client.registration.google.client-secret}") final String clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    private ClientRegistration clientRegistration() {
        return CommonOAuth2Provider
                .GOOGLE
                .getBuilder("google")
                .clientId(clientId)
                .clientSecret(clientSecret)
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

}
