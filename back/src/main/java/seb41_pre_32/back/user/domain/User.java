package seb41_pre_32.back.user.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import seb41_pre_32.back.answer.domain.entity.Answer;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.question.domain.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "users")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "login_id", nullable = false, unique = true, length = 20)
    private String loginId;

    @Column(name = "user_name", nullable = false, length = 50)
    private String username;

    @Column(name = "password", nullable = false, length = 50)
    private String password;

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "profile_url", length = 2000)
    private String profileUrl;

    @Column(name = "reputation")
    private int reputation = 0;

    @Column(name = "location", length = 2000)
    private String location;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false, length = 100)
    private Role role = Role.GUEST;

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @Builder
    public User(final String loginId, final String username, final String password,
                final String email, final String profileUrl, final int reputation,
                final String location, final Role role) {
        this.loginId = loginId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.profileUrl = profileUrl;
        this.reputation = reputation;
        this.location = location;
        this.role = role;
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


}
