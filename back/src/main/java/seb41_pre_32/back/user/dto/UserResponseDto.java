package seb41_pre_32.back.user.dto;

import lombok.Builder;
import lombok.Getter;
import seb41_pre_32.back.answer.dto.AnswerResponseDto;
import seb41_pre_32.back.question.dto.QuestionResponseDto;
import seb41_pre_32.back.user.entity.Role;
import seb41_pre_32.back.user.entity.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserResponseDto {
    private Long id;
    private String displayName;
    private String email;
    private String profileUrl;
    private int reputation;
    private String location;
    private Role role;
    private List<AnswerResponseDto> answers = new ArrayList<>();
    private List<QuestionResponseDto> questions = new ArrayList<>();

    private UserResponseDto() {
    }

    @Builder
    public UserResponseDto(final Long id,
                           final String displayName,
                           final String email,
                           final String profileUrl,
                           final int reputation,
                           final String location,
                           final Role role,
                           final List<AnswerResponseDto> answers,
                           final List<QuestionResponseDto> questions) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.profileUrl = profileUrl;
        this.reputation = reputation;
        this.location = location;
        this.role = role;
        this.answers = answers;
        this.questions = questions;
    }

    public static UserResponseDto transToGetResponseDto(final User user) {
        List<AnswerResponseDto> answers = user.getAnswers().stream()
                .map(answer -> AnswerResponseDto.of(answer))
                .collect(Collectors.toList());
        answers.forEach(answerResponseDto -> answerResponseDto.removeUser());

        List<QuestionResponseDto> questions = user.getQuestions().stream()
                .map(question -> QuestionResponseDto.of(question))
                .collect(Collectors.toList());
        questions.forEach(questionResponseDto -> questionResponseDto.removeUser());

        return UserResponseDto.builder()
                .id(user.getId())
                .displayName(user.getUsername())
                .email(user.getEmail())
                .profileUrl(user.getProfileUrl())
                .reputation(user.getReputation())
                .location(user.getLocation())
                .role(user.getRole())
                .answers(answers)
                .questions(questions)
                .build();
    }

    public static UserResponseDto of(final User user) {
        return UserResponseDto.builder()
                .id(user.getId())
                .displayName(user.getUsername())
                .email(user.getEmail())
                .profileUrl(user.getProfileUrl())
                .reputation(user.getReputation())
                .location(user.getLocation())
                .role(user.getRole())
                .build();
    }
}
