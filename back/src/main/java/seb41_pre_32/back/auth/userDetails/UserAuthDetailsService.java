package seb41_pre_32.back.auth.userDetails;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import seb41_pre_32.back.auth.utils.CustomAuthorityUtils;
import seb41_pre_32.back.exception.user.UserNotFoundException;
import seb41_pre_32.back.user.entity.User;
import seb41_pre_32.back.user.repository.UserRepository;

import java.util.Collection;

@Component
@RequiredArgsConstructor
public class UserAuthDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    private final CustomAuthorityUtils customAuthorityUtils;

    @Override
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UserNotFoundException());
        return new CustomUserDetails(user);
    }

    private final class CustomUserDetails extends User implements UserDetails {
        CustomUserDetails(final User user) {
            this.setUserServiceVal(user.getId(),
                    user.getEmail(),
                    user.getPassword(),
                    user.getUsername(),
                    user.getRole());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return customAuthorityUtils.createAuthorities(this.getRole().getValue());
        }

        @Override
        public String getUsername() {
            return this.getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }

}
