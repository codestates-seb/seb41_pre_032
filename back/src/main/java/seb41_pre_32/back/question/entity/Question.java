package seb41_pre_32.back.question.entity;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.tag.entity.QuestionTag;
import seb41_pre_32.back.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "questions")
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long questionId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "contents", nullable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(name = "attempt", columnDefinition = "TEXT")
    private String attempt;

    @Column(name = "like_count")
    private int likeCount;
    @Column(name = "dis_like_count")
    private int disLikeCount;
    @Column(name = "reputation")
    private int reputation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answerList = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> tags = new ArrayList<>();

    protected Question() {
    }

    @Builder
    public Question(final Long id,
                    final String title,
                    final String contents,
                    final String attempt) {
        this.questionId = id;
        this.title = title;
        this.contents = contents;
        this.attempt = attempt;
    }

    public void addUser(final User user) {
        this.user = user;
        user.getQuestions().add(this);
    }

    public void addTags(final List<QuestionTag> tags) {
        this.tags = tags;
        tags.forEach(t -> t.changeQuestion(this));
    }

    public void changeTitle(final String title) {
        this.title = title;
    }

    public void changeContents(final String contents) {
        this.contents = contents;
    }

    public void changeAttempt(final String attempt) {
        this.attempt = attempt;
    }

    public void updateLikeCount() {
        this.likeCount++;
    }

    public void updateDisLikeCount() {
        this.disLikeCount++;
    }

    public void updateReputation() {
        this.reputation = this.likeCount - this.disLikeCount;
    }
}
