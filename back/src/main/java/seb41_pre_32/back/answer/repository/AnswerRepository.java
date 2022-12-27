package seb41_pre_32.back.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import seb41_pre_32.back.answer.entity.Answer;

import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    @Override
    @Query("select a from Answer a left join fetch a.user where a.answerId =:id")
    Optional<Answer> findById(Long id);
}
