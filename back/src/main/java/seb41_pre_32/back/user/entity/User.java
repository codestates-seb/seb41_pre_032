package seb41_pre_32.back.user.entity;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "users")
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_name", nullable = false, length = 50)
    private String username;

    @Column(name = "password", nullable = false, length = 200)
    private String password;

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "profile_url", length = 2000)
    private String profileUrl;

    @Column(name = "reputation")
    private int reputation;

    @Column(name = "location", length = 2000)
    private String location;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false, length = 100)
    private Role role;

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    protected User() {
    }

    @Builder
    public User(final Long userId,
                final String username,
                final String password,
                final String email,
                final String profileUrl,
                final int reputation,
                final String location,
                final Role role) {
        this.id = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.profileUrl = profileUrl;
        this.reputation = reputation;
        this.location = location;
        this.role = role;
    }

    public void setSecurityUserServiceVal(final Long userId,
                                          final String email,
                                          final String password,
                                          final String username,
                                          final Role role) {
        this.id = userId;
        this.email = email;
        this.password = password;
        this.username = username;
        this.role = role;
    }

    public static User transToGoogleUser(final String email) {
        return User.builder()
                .email(email)
                .username(email.substring(0, email.indexOf("@")))
                .build();
    }

    public void setUserAnswersAndQuestions(final List<Answer> answers,
                                           final List<Question> questions) {
        this.answers = answers;
        this.questions = questions;
    }

    public void changeUsername(final String username) {
        this.username = username;
    }

    public void changeProfile(final String profileUrl) {
        this.profileUrl = profileUrl;
    }

    public void changeLocation(final String location) {
        this.location = location;
    }

    public void changePassword(final String password) {
        this.password = password;
    }

    public void changeRole(final Role role) {
        this.role = role;
    }

    public String getDisplayName() {
        return username;
    }
}
