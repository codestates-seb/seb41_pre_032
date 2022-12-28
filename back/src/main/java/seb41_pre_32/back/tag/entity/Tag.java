package seb41_pre_32.back.tag.entity;

import lombok.Getter;
import seb41_pre_32.back.audit.BaseEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Table(name = "tags")
public class Tag extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long tagId;

    @Column(name = "tag_name")
    private String tagName;

    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL)
    private List<QuestionTag> questions = new ArrayList<>();

    protected Tag() {
    }

    public Tag(final String tagName) {
        this.tagName = tagName;
    }
}
