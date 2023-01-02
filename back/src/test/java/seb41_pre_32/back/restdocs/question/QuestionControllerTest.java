package seb41_pre_32.back.restdocs.question;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.operation.preprocess.Preprocessors;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import seb41_pre_32.back.answer.entity.Answer;
import seb41_pre_32.back.auth.presentation.dto.AuthInfo;
import seb41_pre_32.back.question.controller.QuestionController;
import seb41_pre_32.back.question.dto.QuestionPatchDto;
import seb41_pre_32.back.question.dto.QuestionPostDto;
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.question.service.QuestionService;
import seb41_pre_32.back.tag.entity.QuestionTag;
import seb41_pre_32.back.tag.entity.Tag;
import seb41_pre_32.back.user.entity.Role;
import seb41_pre_32.back.user.entity.User;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = QuestionController.class,
        excludeFilters = {
                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = WebMvcConfigurer.class)})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class QuestionControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private QuestionService questionService;

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    @WithMockUser
    public void postTest() throws Exception {
        // given
        QuestionPostDto questionPostDto = QuestionPostDto
                .builder()
                .title("질문")
                .contents("내용")
                .attempt("질문 관련 시도 내용")
                .taglist(List.of("태그"))
                .build();
        String content = objectMapper.writeValueAsString(questionPostDto);

        Question question = Question.builder()
                .id(1L)
                .title(questionPostDto.getTitle())
                .contents(questionPostDto.getContents())
                .attempt(questionPostDto.getAttempt())
                .build();

        Tag tag = new Tag("태그");
        QuestionTag questionTag = QuestionTag.builder()
                .question(question)
                .tag(tag)
                .build();

        User user = User.builder()
                .userId(1L)
                .password("1111")
                .username("userA")
                .email("userA@gmail.com")
                .profileUrl("basic.url")
                .reputation(0)
                .location("서울")
                .role(Role.USER)
                .build();

        Answer answer = Answer.builder()
                .id(1L)
                .contents("답변내용")
                .build();
        List<Answer> answers = List.of(answer);

        List<QuestionTag> tags = List.of(questionTag);
        question.addTags(tags);
        question.addUser(user);
        answers.forEach(a -> a.addQuestion(question));

        given(questionService.createQuestion(Mockito.any(QuestionPostDto.class), Mockito.any(AuthInfo.class))).willReturn(question);

        // when
        ResultActions actions = mockMvc.perform(post("/api/questions")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
                .content(content)
        );

        // then
        actions.andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(question.getQuestionId()))
                .andExpect(jsonPath("$.title").value(question.getTitle()))
                .andExpect(jsonPath("$.contents").value(question.getContents()))
                .andExpect(jsonPath("$.attempt").value(question.getAttempt()))
                .andExpect(jsonPath("$.tags[0].tagName").value(tag.getTagName()))
                .andExpect(jsonPath("$.user.id").value(user.getId()))
                .andExpect(jsonPath("$.answerCount").value(answers.size()))
                .andDo(document("create-question",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("contents").type(JsonFieldType.STRING).description("질문 내용"),
                                        fieldWithPath("attempt").type(JsonFieldType.STRING).description("질문 시도한 내용").optional(),
                                        fieldWithPath("taglist").type(JsonFieldType.ARRAY).description("태그 리스트").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("contents").type(JsonFieldType.STRING).description("질문 내용"),
                                        fieldWithPath("attempt").type(JsonFieldType.STRING).description("질문 시도한 내용"),
                                        fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("tags[0].tagName").type(JsonFieldType.STRING).description("태그이름"),
                                        fieldWithPath("user").type(JsonFieldType.OBJECT).description("질문한 회원"),
                                        fieldWithPath("user.id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("user.displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("user.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("user.profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("user.reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("user.location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("user.role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("user.answers").type(JsonFieldType.NULL).description("회원 답변 리스트"),
                                        fieldWithPath("user.questions").type(JsonFieldType.NULL).description("회원 질문 리스트"),
                                        fieldWithPath("likeCount").type(JsonFieldType.NUMBER).description("질문 좋아요 수"),
                                        fieldWithPath("dislikeCount").type(JsonFieldType.NUMBER).description("질문 싫어요 수"),
                                        fieldWithPath("reputation").type(JsonFieldType.NUMBER).description("질문 명성"),
                                        fieldWithPath("createdDate").type(JsonFieldType.NULL).description("질문 작성일"),
                                        fieldWithPath("updatedDate").type(JsonFieldType.NULL).description("질문 수정일"),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("답변 갯수")
                                )
                        )
                ));
    }

    @Test
    @WithMockUser
    public void updateTest() throws Exception {
        // given
        QuestionPatchDto questionPatchDto = QuestionPatchDto
                .builder()
                .title("질문 수정")
                .contents("내용 수정")
                .attempt("질문 관련 시도 내용 수정")
                .build();
        String content = objectMapper.writeValueAsString(questionPatchDto);

        Question question = Question.builder()
                .id(1L)
                .title(questionPatchDto.getTitle())
                .contents(questionPatchDto.getContents())
                .attempt(questionPatchDto.getAttempt())
                .build();

        Tag tag = new Tag("태그");
        QuestionTag questionTag = QuestionTag.builder()
                .question(question)
                .tag(tag)
                .build();

        User user = User.builder()
                .userId(1L)
                .password("1111")
                .username("userA")
                .email("userA@gmail.com")
                .profileUrl("basic.url")
                .reputation(0)
                .location("서울")
                .role(Role.USER)
                .build();

        Answer answer = Answer.builder()
                .id(1L)
                .contents("답변내용")
                .build();
        List<Answer> answers = List.of(answer);

        List<QuestionTag> tags = List.of(questionTag);
        question.addTags(tags);
        question.addUser(user);
        answers.forEach(a -> a.addQuestion(question));

        given(questionService.updateQuestion(Mockito.any(QuestionPatchDto.class), Mockito.anyLong(), Mockito.any(AuthInfo.class))).willReturn(question);

        // when
        ResultActions actions = mockMvc.perform(patch("/api/questions/{questionId}", question.getQuestionId())
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
                .content(content)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(question.getQuestionId()))
                .andExpect(jsonPath("$.title").value(question.getTitle()))
                .andExpect(jsonPath("$.contents").value(question.getContents()))
                .andExpect(jsonPath("$.attempt").value(question.getAttempt()))
                .andExpect(jsonPath("$.tags[0].tagName").value(tag.getTagName()))
                .andExpect(jsonPath("$.user.id").value(user.getId()))
                .andExpect(jsonPath("$.answerCount").value(answers.size()))
                .andDo(document("update-question",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        pathParameters(
                                parameterWithName("questionId").description("질문 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("수정할 질문 제목"),
                                        fieldWithPath("contents").type(JsonFieldType.STRING).description("수정 질문 내용"),
                                        fieldWithPath("attempt").type(JsonFieldType.STRING).description("수정 질문 시도한 내용").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("contents").type(JsonFieldType.STRING).description("질문 내용"),
                                        fieldWithPath("attempt").type(JsonFieldType.STRING).description("질문 시도한 내용"),
                                        fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("tags[0].tagName").type(JsonFieldType.STRING).description("태그이름"),
                                        fieldWithPath("user").type(JsonFieldType.OBJECT).description("질문한 회원"),
                                        fieldWithPath("user.id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("user.displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("user.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("user.profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("user.reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("user.location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("user.role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("user.answers").type(JsonFieldType.NULL).description("회원 답변 리스트"),
                                        fieldWithPath("user.questions").type(JsonFieldType.NULL).description("회원 질문 리스트"),
                                        fieldWithPath("likeCount").type(JsonFieldType.NUMBER).description("질문 좋아요 수"),
                                        fieldWithPath("dislikeCount").type(JsonFieldType.NUMBER).description("질문 싫어요 수"),
                                        fieldWithPath("reputation").type(JsonFieldType.NUMBER).description("질문 명성"),
                                        fieldWithPath("createdDate").type(JsonFieldType.NULL).description("질문 작성일"),
                                        fieldWithPath("updatedDate").type(JsonFieldType.NULL).description("질문 수정일"),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("답변 갯수")
                                )
                        )
                ));
    }

    @Test
    @WithMockUser
    public void getQuestionTest() throws Exception {
        // given
        Long questionId = 1L;

        Question question = Question.builder()
                .id(questionId)
                .title("질문제목")
                .contents("질문내용")
                .attempt("시도내용")
                .build();

        Tag tag = new Tag("태그");
        QuestionTag questionTag = QuestionTag.builder()
                .question(question)
                .tag(tag)
                .build();

        User user = User.builder()
                .userId(1L)
                .password("1111")
                .username("userA")
                .email("userA@gmail.com")
                .profileUrl("basic.url")
                .reputation(0)
                .location("서울")
                .role(Role.USER)
                .build();

        Answer answer = Answer.builder()
                .id(1L)
                .contents("답변내용")
                .build();
        List<Answer> answers = List.of(answer);
        List<QuestionTag> tags = List.of(questionTag);
        question.addTags(tags);
        question.addUser(user);
        answers.forEach(a -> a.addQuestion(question));

        given(questionService.findQuestion(Mockito.anyLong())).willReturn(question);

        // when
        ResultActions actions = mockMvc.perform(get("/api/questions/{questionId}", question.getQuestionId())
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(question.getQuestionId()))
                .andExpect(jsonPath("$.title").value(question.getTitle()))
                .andExpect(jsonPath("$.contents").value(question.getContents()))
                .andExpect(jsonPath("$.attempt").value(question.getAttempt()))
                .andExpect(jsonPath("$.tags[0].tagName").value(tag.getTagName()))
                .andExpect(jsonPath("$.user.id").value(user.getId()))
                .andExpect(jsonPath("$.answerCount").value(answers.size()))
                .andDo(document("get-question",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        pathParameters(
                                parameterWithName("questionId").description("질문 식별자")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("contents").type(JsonFieldType.STRING).description("질문 내용"),
                                        fieldWithPath("attempt").type(JsonFieldType.STRING).description("질문 시도한 내용"),
                                        fieldWithPath("tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("tags[0].tagName").type(JsonFieldType.STRING).description("태그이름"),
                                        fieldWithPath("user").type(JsonFieldType.OBJECT).description("질문한 회원"),
                                        fieldWithPath("user.id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("user.displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("user.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("user.profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("user.reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("user.location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("user.role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("user.answers").type(JsonFieldType.NULL).description("회원 답변 리스트"),
                                        fieldWithPath("user.questions").type(JsonFieldType.NULL).description("회원 질문 리스트"),
                                        fieldWithPath("likeCount").type(JsonFieldType.NUMBER).description("질문 좋아요 수"),
                                        fieldWithPath("dislikeCount").type(JsonFieldType.NUMBER).description("질문 싫어요 수"),
                                        fieldWithPath("reputation").type(JsonFieldType.NUMBER).description("질문 명성"),
                                        fieldWithPath("createdDate").type(JsonFieldType.NULL).description("질문 작성일"),
                                        fieldWithPath("updatedDate").type(JsonFieldType.NULL).description("질문 수정일"),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("답변 갯수")
                                )
                        )
                ));
    }

    @Test
    @WithMockUser
    public void getQuestionsTest() throws Exception {
        // given
        Question question1 = Question.builder()
                .id(1L)
                .title("질문 제목1")
                .contents("질문 내용1")
                .attempt("시도 내용1")
                .build();

        Question question2 = Question.builder()
                .id(2L)
                .title("질문 제목2")
                .contents("질문 내용2")
                .attempt("시도 내용2")
                .build();

        Tag tag1 = new Tag("태그1");
        QuestionTag questionTag1 = QuestionTag.builder()
                .question(question1)
                .tag(tag1)
                .build();


        Tag tag2 = new Tag("태그2");
        QuestionTag questionTag2 = QuestionTag.builder()
                .question(question2)
                .tag(tag2)
                .build();

        User user = User.builder()
                .userId(1L)
                .password("1111")
                .username("userA")
                .email("userA@gmail.com")
                .profileUrl("basic.url")
                .reputation(0)
                .location("서울")
                .role(Role.USER)
                .build();

        Answer answer1 = Answer.builder()
                .id(1L)
                .contents("답변내용")
                .build();

        Answer answer2 = Answer.builder()
                .id(2L)
                .contents("답변내용2")
                .build();

        List<Answer> answers1 = List.of(answer1);
        List<Answer> answers2 = List.of(answer2);

        List<QuestionTag> tags1 = List.of(questionTag1);
        List<QuestionTag> tags2 = List.of(questionTag2);

        question1.addTags(tags1);
        question2.addTags(tags2);

        question1.addUser(user);
        question2.addUser(user);

        answers1.forEach(a -> a.addQuestion(question1));
        answers2.forEach(a -> a.addQuestion(question2));

        List<Question> questions = List.of(question1, question2);
        PageImpl<Question> questionPage = new PageImpl<>(questions,
                PageRequest.of(0, 10, Sort.by("questionId")), 2);

        given(questionService.findQuestions(Mockito.anyInt(), Mockito.anyInt())).willReturn(questionPage);

        // when
        ResultActions actions = mockMvc.perform(get("/api/questions")
                .param("page", "1")
                .param("size", "10")
                .accept(MediaType.APPLICATION_JSON));

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data[0].id").value(question1.getQuestionId()))
                .andExpect(jsonPath("$.data[0].title").value(question1.getTitle()))
                .andExpect(jsonPath("$.data[0].contents").value(question1.getContents()))
                .andExpect(jsonPath("$.data[0].attempt").value(question1.getAttempt()))
                .andExpect(jsonPath("$.data[0].tags[0].tagName").value(tag1.getTagName()))
                .andExpect(jsonPath("$.data[0].user.id").value(user.getId()))
                .andExpect(jsonPath("$.data[0].answerCount").value(answers1.size()))
                .andDo(document("get-questions",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("페이지 번호"),
                                parameterWithName("size").description("페이지 크기")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과데이터"),
                                        fieldWithPath("data[0].id").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data[0].title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("data[0].contents").type(JsonFieldType.STRING).description("질문 내용"),
                                        fieldWithPath("data[0].attempt").type(JsonFieldType.STRING).description("질문 시도한 내용"),
                                        fieldWithPath("data[0].tags").type(JsonFieldType.ARRAY).description("태그 리스트"),
                                        fieldWithPath("data[0].tags[0].tagName").type(JsonFieldType.STRING).description("태그이름"),
                                        fieldWithPath("data[0].user").type(JsonFieldType.OBJECT).description("질문한 회원"),
                                        fieldWithPath("data[0].user.id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data[0].user.displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("data[0].user.email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data[0].user.profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("data[0].user.reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("data[0].user.location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("data[0].user.role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("data[0].user.answers").type(JsonFieldType.NULL).description("회원 답변 리스트"),
                                        fieldWithPath("data[0].user.questions").type(JsonFieldType.NULL).description("회원 질문 리스트"),
                                        fieldWithPath("data[0].likeCount").type(JsonFieldType.NUMBER).description("질문 좋아요 수"),
                                        fieldWithPath("data[0].dislikeCount").type(JsonFieldType.NUMBER).description("질문 싫어요 수"),
                                        fieldWithPath("data[0].reputation").type(JsonFieldType.NUMBER).description("질문 명성"),
                                        fieldWithPath("data[0].createdDate").type(JsonFieldType.NULL).description("질문 작성일"),
                                        fieldWithPath("data[0].updatedDate").type(JsonFieldType.NULL).description("질문 수정일"),
                                        fieldWithPath("data[0].answerCount").type(JsonFieldType.NUMBER).description("답변 갯수"),
                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("현재 페이지"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("요청 페이지 사이즈"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 개체수"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지")
                                )
                        )
                ));
    }

    @Test
    @WithMockUser
    public void deleteTest() throws Exception {
        // given
        Long questionId = 1L;
        doNothing().when(questionService).deleteQuestion(Mockito.anyLong(), Mockito.any(AuthInfo.class));

        // when
        ResultActions actions = mockMvc.perform(
                delete("/api/questions/{questionId}", questionId)
                        .with(SecurityMockMvcRequestPostProcessors.csrf()));

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document("delete-question",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        pathParameters(
                                parameterWithName("questionId").description("질문 식별자")
                        )
                ));
    }

}