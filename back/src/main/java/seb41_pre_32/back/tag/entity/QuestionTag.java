package seb41_pre_32.back.tag.entity;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.question.entity.Question;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "question_tag_rel")
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_tag_id")
    private Long questionTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag_id")
    private Tag tag;

    protected QuestionTag() {
    }

    @Builder
    public QuestionTag(final Question question, final Tag tag) {
        this.question = question;
        this.tag = tag;
    }

    public void changeQuestion(final Question question) {
        this.question = question;
    }
}
