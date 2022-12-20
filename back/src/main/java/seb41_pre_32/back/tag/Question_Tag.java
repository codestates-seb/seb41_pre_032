package seb41_pre_32.back.tag;

import lombok.Getter;
import lombok.NoArgsConstructor;
import seb41_pre_32.back.question.domain.Question;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "question_tag_rel")
public class Question_Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question questions;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tags;
}
