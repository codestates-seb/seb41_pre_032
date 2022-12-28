package seb41_pre_32.back.common.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponse<T> {

    private List<T> data;
    private PageInfo pageInfo;

    private MultiResponse() {
    }

    public MultiResponse(final List<T> data,
                         final Page page) {
        this.data = data;
        this.pageInfo = PageInfo.builder()
                .page(page.getNumber() + 1)
                .size(page.getSize())
                .totalElements(page.getTotalElements())
                .totalPages(page.getTotalPages())
                .build();
    }
}
