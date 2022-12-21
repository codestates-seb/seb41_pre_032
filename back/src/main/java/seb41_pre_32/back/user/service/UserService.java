package seb41_pre_32.back.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.exception.user.DuplicateUserEmailException;
import seb41_pre_32.back.exception.user.DuplicateUserIdException;
import seb41_pre_32.back.user.domain.User;
import seb41_pre_32.back.user.dto.UserPostDto;
import seb41_pre_32.back.user.repository.UserRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public User createUser(final UserPostDto userPostDto) {
        User user = userPostDto.toUser();
        checkLoginIdDuplicate(user.getLoginId());
        checkEmailDuplicate(user.getEmail());
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    private void checkLoginIdDuplicate(String loginId) {
        boolean isLoginIdDuplicated = userRepository.existsUserByLoginId(loginId);
        if (isLoginIdDuplicated) {
            throw new DuplicateUserIdException();
        }
    }

    private void checkEmailDuplicate(String email) {
        boolean isEmailDuplicated = userRepository.existsUserByEmail(email);
        if (isEmailDuplicated) {
            throw new DuplicateUserEmailException();
        }
    }

}
