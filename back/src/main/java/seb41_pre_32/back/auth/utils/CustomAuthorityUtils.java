package seb41_pre_32.back.auth.utils;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomAuthorityUtils {
    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");
    private final List<GrantedAuthority> GUEST_ROLES = AuthorityUtils.createAuthorityList("ROLE_GUEST");
    private static final String USER_ROLES_STRING = "USER";
    private static final String GUEST_ROLES_STRING = "GUEST";

    public List<GrantedAuthority> createAuthorities(final String role) {
        if (role.equals("USER")) return USER_ROLES;
        else return GUEST_ROLES;
    }

    public String createAuthority(final String role) {
        if (role.equals("USER")) return USER_ROLES_STRING;
        else return GUEST_ROLES_STRING;
    }

}
