package seb41_pre_32.back.question.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import seb41_pre_32.back.answer.domain.entity.Answer;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.user.domain.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "questions")
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String addContents;

    private int likeCount = 0;
    private int disLikeCount = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answerList = new ArrayList<>();
}
