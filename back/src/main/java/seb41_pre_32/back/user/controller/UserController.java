package seb41_pre_32.back.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb41_pre_32.back.user.domain.User;
import seb41_pre_32.back.user.dto.*;
import seb41_pre_32.back.user.service.UserService;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @PostMapping
    public UsersSingleResponseDto join(@RequestBody @Valid final UserPostRequest userPostRequest) {
        return new UsersSingleResponseDto<>(
                HttpStatus.CREATED.getReasonPhrase(),
                UserResponseDto.of(userService.createUser(userPostRequest)));
    }

    @PatchMapping("/{userId}")
    public UsersSingleResponseDto update(@PathVariable("userId") Long userId,
                                         @RequestBody @Valid final UserPatchRequest userPatchRequest) {
        return new UsersSingleResponseDto<>(
                HttpStatus.OK.getReasonPhrase(),
                UserResponseDto.of(userService.updateUser(userId, userPatchRequest))
        );
    }

    @GetMapping("/{userId}")
    public UsersSingleResponseDto getUser(@PathVariable("userId") Long userId) {
        return new UsersSingleResponseDto<>(
                HttpStatus.OK.getReasonPhrase(),
                UserResponseDto.of(userService.findUser(userId))
        );
    }

    @GetMapping
    public UserPagingResponseDto getUsers(@RequestParam("page") int page,
                                          @RequestParam("size") int size) {

        Page<User> users = userService.findUsers(page - 1, size);

        List<UserResponseDto> userResponseDtos = users.getContent()
                .stream()
                .map(UserResponseDto::of)
                .collect(Collectors.toList());

        return new UserPagingResponseDto<>(HttpStatus.OK.getReasonPhrase(), userResponseDtos, users);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity delete(@PathVariable("userId") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
