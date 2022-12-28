package seb41_pre_32.back.answer.domain.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import seb41_pre_32.back.answer.domain.entity.Answer;
import seb41_pre_32.back.question.domain.Question;
import seb41_pre_32.back.user.domain.User;

import javax.transaction.Transactional;
import java.lang.reflect.Member;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final


    public Answer createAnswer(Answer answer, Question question, User user){
        Answer createdAnswer = Answer.builder()
                .content(answer.getContents())
                .author(user)
                .question(question)
                .build();
        user.getAnswers().add(createAnswer);
        question.getAnswers().add(createdAnswer);
        return createdAnswer;
    }

    public Answer updateAnswer(Answer answer){
        ...

    }

    public Answer acceptAnswer(Answer answer, Question question, User user){
        ...
    }

    public void deleteAnswer(Answer answer, User user){
        ....
    }
}