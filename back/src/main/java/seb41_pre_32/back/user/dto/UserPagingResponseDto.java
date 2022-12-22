package seb41_pre_32.back.user.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class UserPagingResponseDto<T> {
    private String status;
    private List<T> data;
    private PageInfo pageInfo;

    private UserPagingResponseDto() {
    }

    public UserPagingResponseDto(final String status,
                                 final List<T> data,
                                 final Page page) {
        this.status = status;
        this.data = data;
        this.pageInfo = PageInfo.builder()
                .page(page.getNumber() + 1)
                .size(page.getSize())
                .totalElements(page.getTotalElements())
                .totalPages(page.getTotalPages())
                .build();
    }
}
