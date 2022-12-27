package seb41_pre_32.back.user.domain;

import lombok.Getter;

public enum Role {
    GUEST("GUEST"),
    USER("USER"),
    ADMIN("ADMIN");
    @Getter
    private String value;

    Role(final String value) {
        this.value = value;
    }
}
