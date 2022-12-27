package seb41_pre_32.back.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import seb41_pre_32.back.question.entity.Question;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Override
    @EntityGraph(attributePaths = {"user"})
    Page<Question> findAll(Pageable pageable);

    @Override
    @Query("select q from Question q left join fetch q.user left join fetch q.tags where q.questionId =:id")
    Optional<Question> findById(Long id);
}
