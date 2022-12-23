package seb41_pre_32.back.answer.domain.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.question.domain.Question;
import seb41_pre_32.back.user.domain.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "answers")
public class Answer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents;

    private int likeCount = 0;
    private int disLikeCount = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

}
