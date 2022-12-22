package seb41_pre_32.back.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.exception.user.DuplicateUserEmailException;
import seb41_pre_32.back.exception.user.DuplicateUserIdException;
import seb41_pre_32.back.exception.user.UserNotFoundException;
import seb41_pre_32.back.user.domain.User;
import seb41_pre_32.back.user.dto.UserPatchRequest;
import seb41_pre_32.back.user.dto.UserPostRequest;
import seb41_pre_32.back.user.repository.UserRepository;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public User createUser(final UserPostRequest userPostRequest) {
        User user = userPostRequest.toUser();
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

    @Transactional
    public User updateUser(Long userId, UserPatchRequest userPatchRequest) {
        User findUser = findValidUser(userId);

        Optional.ofNullable(userPatchRequest.getUsername())
                .ifPresent(username -> findUser.changeUsername(username));
        Optional.ofNullable(userPatchRequest.getProfileUrl())
                .ifPresent(url -> findUser.changeProfile(url));
        Optional.ofNullable(userPatchRequest.getLocation())
                .ifPresent(location -> findUser.changeLocation(location));

        return findUser;
    }

    private User findValidUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
    }

    @Transactional
    public void deleteUser(Long userId) {
        findValidUser(userId);
        userRepository.deleteById(userId);
    }

    public User findUser(Long userId) {
        return findValidUser(userId);
    }

    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page, size, Sort.by("id")));
    }
}
