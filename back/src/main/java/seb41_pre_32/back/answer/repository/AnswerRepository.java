package seb41_pre_32.back.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import seb41_pre_32.back.answer.entity.Answer;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Override
    @Query("select a from Answer a left join fetch a.user where a.answerId =:id")
    Optional<Answer> findById(Long id);

    @Query("select a from Answer a where a.question.questionId =:questionId")
    Page<Answer> findAnswersByQuestion(Long questionId, Pageable pageable);

    @Query("select a from Answer a where a.user.id =:userId")
    List<Answer> findAnswersByUserId(Long userId);
}
