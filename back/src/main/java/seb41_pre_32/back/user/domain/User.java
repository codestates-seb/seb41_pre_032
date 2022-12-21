package seb41_pre_32.back.user.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import seb41_pre_32.back.answer.domain.Answer;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.question.domain.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "users")
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false)
    private String loginId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    private String picture;

    private int reputation;
    private String location;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.GUEST;

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();


}
