package seb41_pre_32.back.tag.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import seb41_pre_32.back.question.entity.Question;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "question_tag_rel")
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    @Builder
    public QuestionTag(final Question question, final Tag tag) {
        this.question = question;
        this.tag = tag;
    }

    public void changeQuestion(final Question question) {
        this.question = question;
    }
}
