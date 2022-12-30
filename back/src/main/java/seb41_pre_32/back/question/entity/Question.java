package seb41_pre_32.back.question.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.audit.BaseEntity;
import seb41_pre_32.back.tag.entity.QuestionTag;
import seb41_pre_32.back.user.entity.User;

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

    @Column(columnDefinition = "TEXT")
    private String attempt;

    private int likeCount;
    private int disLikeCount;
    private int reputation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answerList = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> tags = new ArrayList<>();

    @Builder
    public Question(final String title, final String contents, final String attempt) {
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
        this.disLikeCount--;
    }

    public void updateReputation() {
        this.reputation = this.likeCount + this.disLikeCount;
    }
}
