package seb41_pre_32.back.tag;

import seb41_pre_32.back.audit.BaseEntity;

import javax.persistence.*;

@Entity
@Table(name = "tags")
public class Tag extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;
    private String tagName;
    private String tagDesc;

}
