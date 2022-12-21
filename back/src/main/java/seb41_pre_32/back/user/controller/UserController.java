package seb41_pre_32.back.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb41_pre_32.back.user.domain.User;
import seb41_pre_32.back.user.dto.UserPostDto;
import seb41_pre_32.back.user.dto.UserResponseDto;
import seb41_pre_32.back.user.service.UserService;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @PostMapping()
    public ResponseEntity<UserResponseDto> join(@RequestBody @Valid final UserPostDto userPostDto) {
        User createdUser = userService.createUser(userPostDto);
        return new ResponseEntity<>(UserResponseDto.of(createdUser), HttpStatus.CREATED);
    }
}
