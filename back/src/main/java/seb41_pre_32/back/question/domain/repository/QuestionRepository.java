package seb41_pre_32.back.question.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb41_pre_32.back.question.domain.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
