package seb41_pre_32.back.user.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.exception.user.DuplicateUserEmailException;
import seb41_pre_32.back.exception.user.DuplicateUserIdException;
import seb41_pre_32.back.exception.user.UserNotFoundException;
import seb41_pre_32.back.user.domain.User;
import seb41_pre_32.back.user.dto.UserPatchRequest;
import seb41_pre_32.back.user.dto.UserPostRequest;
import seb41_pre_32.back.user.repository.UserRepository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
class UserServiceTest {
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @Test
    void createUser() {
        // given
        UserPostRequest userPostRequest = UserPostRequest.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        // when
        User savedUser = userService.createUser(userPostRequest);
        User findUser = userService.findUser(savedUser.getId());

        // then
        assertThat(userPostRequest.getUsername()).isEqualTo(findUser.getUsername());
    }

    @Test
    void checkLoginIdDuplicateTest() {
        // given
        UserPostRequest userPostRequest = UserPostRequest.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        UserPostRequest userPostRequest2 = UserPostRequest.builder()
                .loginId("testLoginId")
                .username("testUserName2")
                .password("testPassWord2")
                .email("teatEmail5678@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        // when
        userService.createUser(userPostRequest);

        // then
        assertThrows(DuplicateUserIdException.class,
                () -> userService.createUser(userPostRequest2));
    }

    @Test
    void checkEmailDuplicateTest() {
        // given
        UserPostRequest userPostRequest = UserPostRequest.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        UserPostRequest userPostRequest2 = UserPostRequest.builder()
                .loginId("testLoginId2")
                .username("testUserName2")
                .password("testPassWord2")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        // when
        userService.createUser(userPostRequest);

        // then
        assertThrows(DuplicateUserEmailException.class,
                () -> userService.createUser(userPostRequest2));
    }

    @Test
    void updateUserTest() {
        // given
        UserPostRequest userPostRequest = UserPostRequest.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        User savedUser = userService.createUser(userPostRequest);
        Long userId = savedUser.getId();

        UserPatchRequest request = new UserPatchRequest(
                "updateName",
                "updateUrl",
                "updateLocation");

        //when
        User updatedUser = userService.updateUser(userId, request);

        //then
        assertThat(updatedUser.getUsername()).isEqualTo(request.getUsername());
        assertThat(updatedUser.getProfileUrl()).isEqualTo(request.getProfileUrl());
        assertThat(updatedUser.getLocation()).isEqualTo(request.getLocation());
    }

    @Test
    void findValidUserTest() {
        // given
        UserPostRequest userPostRequest = UserPostRequest.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        User savedUser = userService.createUser(userPostRequest);
        Long userId = savedUser.getId();

        //when
        User findUser = userService.findUser(userId);

        //then
        assertThat(findUser.getId()).isEqualTo(userId);
    }

    @Test
    void findInvalidUserTest() {
        // given
        // when
        Long userId = 2L;

        // then
        assertThrows(UserNotFoundException.class,
                () -> userService.findUser(userId));
    }

    @Test
    void deleteUserTest() {
        //given
        UserPostRequest userPostRequest = UserPostRequest.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        User savedUser = userService.createUser(userPostRequest);

        //when
        Long userId = savedUser.getId();
        userService.deleteUser(userId);

        //then
        assertThrows(UserNotFoundException.class,
                () -> userService.findUser(userId));
    }
}