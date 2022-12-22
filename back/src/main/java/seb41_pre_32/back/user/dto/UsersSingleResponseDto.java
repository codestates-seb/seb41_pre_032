package seb41_pre_32.back.user.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class UsersSingleResponseDto<T> {
    private String status;
    private T data;
    private UsersSingleResponseDto() {
    }

    public UsersSingleResponseDto(final String status,
                                  final T data) {
        this.status = status;
        this.data = data;
    }
}
