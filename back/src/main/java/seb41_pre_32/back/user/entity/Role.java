package seb41_pre_32.back.user.entity;

import lombok.Getter;

public enum Role {
    USER("USER"),
    ADMIN("ADMIN");

    @Getter
    private String value;

    Role(final String value) {
        this.value = value;
    }
}
