package seb41_pre_32.back.user.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import seb41_pre_32.back.exception.user.DuplicateUserEmailException;
import seb41_pre_32.back.exception.user.DuplicateUserIdException;
import seb41_pre_32.back.user.domain.User;
import seb41_pre_32.back.user.dto.UserPostDto;

import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
class UserServiceTest {
    @Autowired
    UserService userService;

    @Test
    void createUser() {
        // given
        UserPostDto userPostDto = UserPostDto.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        // when
        User savedUser = userService.createUser(userPostDto);

        // then
        Assertions.assertThat(userPostDto.getUsername()).isEqualTo(savedUser.getUsername());
    }

    @Test
    void checkLoginIdDuplicateTest() {
        // given
        UserPostDto userPostDto = UserPostDto.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        UserPostDto userPostDto2 = UserPostDto.builder()
                .loginId("testLoginId")
                .username("testUserName222")
                .password("testPassWord222")
                .email("teatEmail1234-222@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        // when
        User savedUser1 = userService.createUser(userPostDto);

        // then
        assertThrows(DuplicateUserIdException.class,
                () -> userService.createUser(userPostDto2)
        );
    }

    @Test
    void checkEmailDuplicateTest() {
        // given
        UserPostDto userPostDto = UserPostDto.builder()
                .loginId("testLoginId")
                .username("testUserName")
                .password("testPassWord")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        UserPostDto userPostDto2 = UserPostDto.builder()
                .loginId("testLoginId222")
                .username("testUserName222")
                .password("testPassWord222")
                .email("teatEmail1234@naver.com")
                .profileUrl("https://img.danawa.com/prod_img/500000/147/615/img/14615147_1.jpg?shrink=500:500&_v=20220426173016")
                .location("서울")
                .build();

        // when
        User savedUser1 = userService.createUser(userPostDto);

        // then
        assertThrows(DuplicateUserEmailException.class,
                () -> userService.createUser(userPostDto2)
        );
    }




}