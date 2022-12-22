package seb41_pre_32.back.question.domain.service;

import org.springframework.stereotype.Service;
import seb41_pre_32.back.question.domain.entity.Question;
import seb41_pre_32.back.question.domain.repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {

        return questionRepository.save(question);
    }

    public Question editQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContents())
                .ifPresent(contents -> findQuestion.setContents(contents));
        Optional.ofNullable(question.getAttempt())
                .ifPresent(attempt -> findQuestion.setAttempt(attempt));
        //태그
        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public List<Question> findQuestions() {
        return (List<Question>) questionRepository.findAll();
    }

    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    public Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion =
                questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow();
        return findQuestion;
    }
}
