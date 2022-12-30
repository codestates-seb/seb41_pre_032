package seb41_pre_32.back.auth.presentation.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class AuthController {

    @GetMapping("/google")
    public String loginGoogle() {
        return "구글 로그인 성공";
    }

}
