package seb41_pre_32.back.answer.entity;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.user.entity.User;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "answers")
public class Answer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private Long answerId;

    @Column(name = "contents", nullable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(name = "like_count")
    private int likeCount;

    @Column(name = "dislike_count")
    private int disLikeCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    protected Answer() {
    }

    @Builder
    public Answer(final Long id,
                  final String contents,
                  final int likeCount,
                  final int disLikeCount) {
        this.answerId = id;
        this.contents = contents;
        this.likeCount = likeCount;
        this.disLikeCount = disLikeCount;
    }

    public void addUser(final User user) {
        this.user = user;
        user.getAnswers().add(this);
    }

    public void changeContents(final String contents) {
        this.contents = contents;
    }

    public void addQuestion(Question question) {
        this.question = question;
        question.getAnswerList().add(this);
    }
}