package seb41_pre_32.back.common.dto.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "서버 정상 작동 확인 - 프론트 수정";
    }
}
