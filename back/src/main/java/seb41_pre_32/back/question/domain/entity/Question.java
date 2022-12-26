package seb41_pre_32.back.question.domain.entity;

import lombok.*;
import seb41_pre_32.back.answer.domain.Answer;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.user.domain.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "questions")
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String attempt;

    private int likeCount = 0;
    private int disLikeCount = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answerList = new ArrayList<>();

    @Builder
    public Question(String title, String contents, String attempt, int likeCount, int disLikeCount, User user, List<Answer> answerList) {
        this.title = title;
        this.contents = contents;
        this.attempt = attempt;
        this.likeCount = likeCount;
        this.disLikeCount = disLikeCount;
        this.user = user;
        this.answerList = answerList;
    }

    public void addUser(User user) {
        this.user = user;
        user.getQuestions().add(this);
    }
}
