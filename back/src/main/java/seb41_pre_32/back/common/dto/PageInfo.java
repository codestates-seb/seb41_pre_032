package seb41_pre_32.back.common.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class PageInfo {
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;

    private PageInfo() {
    }

    @Builder
    public PageInfo(final int page,
                    final int size,
                    final long totalElements,
                    final int totalPages) {
        this.page = page;
        this.size = size;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
    }
}
