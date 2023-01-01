package seb41_pre_32.back.restdocs.user;


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
import seb41_pre_32.back.question.entity.Question;
import seb41_pre_32.back.tag.entity.QuestionTag;
import seb41_pre_32.back.tag.entity.Tag;
import seb41_pre_32.back.user.controller.UserController;
import seb41_pre_32.back.user.dto.UserPatchRequest;
import seb41_pre_32.back.user.dto.UserPostRequest;
import seb41_pre_32.back.user.entity.Role;
import seb41_pre_32.back.user.entity.User;
import seb41_pre_32.back.user.service.UserService;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = UserController.class,
        excludeFilters = {
                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = WebMvcConfigurer.class)})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private UserService userService;
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    @WithMockUser
    public void joinTest() throws Exception {
        // given
        UserPostRequest userPostRequest = UserPostRequest
                .builder()
                .displayName("testUser")
                .password("abc1234")
                .email("test1234@gmail.com")
                .build();

        String content = objectMapper.writeValueAsString(userPostRequest);

        User savedUser = User.builder()
                .userId(1L)
                .password(userPostRequest.getPassword())
                .username(userPostRequest.getDisplayName())
                .email(userPostRequest.getEmail())
                .profileUrl("basic.url")
                .reputation(0)
                .location("서울")
                .role(Role.USER)
                .build();

        given(userService.createUser(Mockito.any(UserPostRequest.class))).willReturn(savedUser);

        // when
        ResultActions actions = mockMvc.perform(post("/api/users")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
                .content(content)
        );

        // then
        actions.andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(savedUser.getId()))
                .andExpect(jsonPath("$.displayName").value(userPostRequest.getDisplayName()))
                .andExpect(jsonPath("$.email").value(userPostRequest.getEmail()))
                .andExpect(jsonPath("$.profileUrl").value("basic.url"))
                .andExpect(jsonPath("$.reputation").value(0))
                .andExpect(jsonPath("$.location").value("서울"))
                .andExpect(jsonPath("$.role").value(savedUser.getRole().getValue()))
                .andDo(document("join-user",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestFields(
                                List.of(
                                        fieldWithPath("displayName").type(JsonFieldType.STRING).description("닉네임"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("answers").type(JsonFieldType.NULL).description("회원 답변 리스트"),
                                        fieldWithPath("questions").type(JsonFieldType.NULL).description("회원 질문 리스트")
                                )
                        )
                ));
    }

    @Test
    @WithMockUser
    public void updateTest() throws Exception {
        // given
        Long userId = 1L;

        UserPatchRequest userPatchRequest = UserPatchRequest.builder()
                .displayName("updatedName")
                .profileUrl("updatedUrl")
                .location("부산")
                .build();

        AuthInfo authInfo = AuthInfo.builder()
                .userId(userId)
                .email("test1234@gmail.com")
                .displayName("originName")
                .role("USER")
                .build();

        String content = objectMapper.writeValueAsString(userPatchRequest);

        User updatedUser = User.builder()
                .userId(authInfo.getUserId())
                .password("1111")
                .username(userPatchRequest.getDisplayName())
                .email(authInfo.getEmail())
                .profileUrl(userPatchRequest.getProfileUrl())
                .reputation(0)
                .location(userPatchRequest.getLocation())
                .role(Role.USER)
                .build();

        given(userService.updateUser(
                Mockito.anyLong(),
                Mockito.any(UserPatchRequest.class),
                Mockito.any(AuthInfo.class)))
                .willReturn(updatedUser);

        // when
        ResultActions actions = mockMvc.perform(patch("/api/users/{userId}", userId)
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
                .content(content)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(userId))
                .andExpect(jsonPath("$.displayName").value(userPatchRequest.getDisplayName()))
                .andExpect(jsonPath("$.email").value(authInfo.getEmail()))
                .andExpect(jsonPath("$.profileUrl").value(userPatchRequest.getProfileUrl()))
                .andExpect(jsonPath("$.reputation").value(0))
                .andExpect(jsonPath("$.location").value(userPatchRequest.getLocation()))
                .andExpect(jsonPath("$.role").value(authInfo.getRole()))
                .andDo(document("update-user",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("회원 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("displayName").type(JsonFieldType.STRING).description("수정할 닉네임"),
                                        fieldWithPath("profileUrl").type(JsonFieldType.STRING).description("수정할 프로필 사진"),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("수정할 주소")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("answers").type(JsonFieldType.NULL).description("회원 답변 리스트"),
                                        fieldWithPath("questions").type(JsonFieldType.NULL).description("회원 질문 리스트")
                                )
                        )
                ));
    }

    @Test
    @WithMockUser
    public void getUserTest() throws Exception {
        // given
        Long userId = 1L;

        Answer answer = Answer.builder()
                .id(1L)
                .contents("답변내용")
                .build();
        List<Answer> answers = List.of(answer);


        Question question = Question.builder()
                .id(1L)
                .title("질문제목")
                .contents("질문내용")
                .attempt("시도내용")
                .build();

        Tag tag = new Tag("태그1");

        QuestionTag questionTag = QuestionTag.builder()
                .question(question)
                .tag(tag)
                .build();
        List<QuestionTag> tags = List.of(questionTag);
        question.addTags(tags);

        List<Question> questions = List.of(question);

        User user = User.builder()
                .userId(userId)
                .password("1111")
                .username("userA")
                .email("userA@gmail.com")
                .profileUrl("basic.url")
                .reputation(0)
                .location("서울")
                .role(Role.USER)
                .build();

        answers.forEach(a -> a.addUser(user));
        questions.forEach(q -> q.addUser(user));

        given(userService.findUser(Mockito.anyLong())).willReturn(user);

        // when
        ResultActions actions = mockMvc.perform(get("/api/users/{userId}", userId)
                .accept(MediaType.APPLICATION_JSON)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(userId))
                .andExpect(jsonPath("$.displayName").value(user.getDisplayName()))
                .andExpect(jsonPath("$.email").value(user.getEmail()))
                .andExpect(jsonPath("$.profileUrl").value(user.getProfileUrl()))
                .andExpect(jsonPath("$.reputation").value(0))
                .andExpect(jsonPath("$.location").value(user.getLocation()))
                .andExpect(jsonPath("$.role").value(user.getRole().getValue()))
                .andExpect(jsonPath("$.answers[0].id").value(answers.get(0).getAnswerId()))
                .andExpect(jsonPath("$.answers[0].contents").value(answers.get(0).getContents()))
                .andExpect(jsonPath("$.questions[0].id").value(questions.get(0).getQuestionId()))
                .andExpect(jsonPath("$.questions[0].contents").value(questions.get(0).getContents()))
                .andDo(document("get-user",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("회원 식별자")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("answers").type(JsonFieldType.ARRAY).description("회원 답변 리스트"),
                                        fieldWithPath("answers[0].id").type(JsonFieldType.NUMBER).description("회원 답변 식별자"),
                                        fieldWithPath("answers[0].contents").type(JsonFieldType.STRING).description("회원 답변 내용"),
                                        fieldWithPath("answers[0].likeCount").type(JsonFieldType.NUMBER).description("회원 답변 좋아요 수"),
                                        fieldWithPath("answers[0].dislikeCount").type(JsonFieldType.NUMBER).description("회원 답변 싫어요 수"),
                                        fieldWithPath("answers[0].createdDate").type(JsonFieldType.NULL).description("회원 답변 생성일"),
                                        fieldWithPath("answers[0].updatedDate").type(JsonFieldType.NULL).description("회원 답변 수정일"),
                                        fieldWithPath("answers[0].user").type(JsonFieldType.NULL).description("답변 회원 정보"),
                                        fieldWithPath("questions").type(JsonFieldType.ARRAY).description("회원 질문 리스트"),
                                        fieldWithPath("questions[0].id").type(JsonFieldType.NUMBER).description("회원 질문 식별자"),
                                        fieldWithPath("questions[0].title").type(JsonFieldType.STRING).description("회원 질문 제목"),
                                        fieldWithPath("questions[0].contents").type(JsonFieldType.STRING).description("회원 질문 내용"),
                                        fieldWithPath("questions[0].attempt").type(JsonFieldType.STRING).description("회원 질문 시도내용"),
                                        fieldWithPath("questions[0].likeCount").type(JsonFieldType.NUMBER).description("회원 질문 좋아요 수"),
                                        fieldWithPath("questions[0].dislikeCount").type(JsonFieldType.NUMBER).description("회원 질문 싫어요 수"),
                                        fieldWithPath("questions[0].reputation").type(JsonFieldType.NUMBER).description("회원 질문 명성"),
                                        fieldWithPath("questions[0].answerCount").type(JsonFieldType.NUMBER).description("회원 질문 답변 수"),
                                        fieldWithPath("questions[0].tags").type(JsonFieldType.ARRAY).description("회원 질문 태그 리스트"),
                                        fieldWithPath("questions[0].tags[0].tagName").type(JsonFieldType.STRING).description("회원 태그명"),
                                        fieldWithPath("questions[0].user").type(JsonFieldType.NULL).description("질문 회원 정보"),
                                        fieldWithPath("questions[0].createdDate").type(JsonFieldType.NULL).description("회원 질문 생성일"),
                                        fieldWithPath("questions[0].updatedDate").type(JsonFieldType.NULL).description("회원 질문 수정일")
                                )
                        )
                ));
    }

    @Test
    @WithMockUser
    public void getUsersTest() throws Exception {
        // given
        User user1 = User.builder()
                .userId(1L)
                .password("1111")
                .username("userA")
                .email("userA@gmail.com")
                .profileUrl("basic.url")
                .reputation(0)
                .location("서울")
                .role(Role.USER)
                .build();

        User user2 = User.builder()
                .userId(2L)
                .password("1111")
                .username("userB")
                .email("userB@gmail.com")
                .profileUrl("basic.url")
                .reputation(0)
                .location("부산")
                .role(Role.USER)
                .build();

        List<User> users = List.of(user1, user2);
        PageImpl<User> userPage = new PageImpl<>(users,
                PageRequest.of(0, 10, Sort.by("id")), 2);

        given(userService.findUsers(Mockito.anyInt(), Mockito.anyInt())).willReturn(userPage);

        // when
        ResultActions actions = mockMvc.perform(get("/api/users")
                .param("page", "1")
                .param("size", "10")
                .accept(MediaType.APPLICATION_JSON));

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.data[0].id").value(user1.getId()))
                .andExpect(jsonPath("$.data[0].email").value(user1.getEmail()))
                .andExpect(jsonPath("$.data[1].id").value(user2.getId()))
                .andExpect(jsonPath("$.data[1].email").value(user2.getEmail()))
                .andExpect(jsonPath("$.pageInfo.page").value(1))
                .andExpect(jsonPath("$.pageInfo.size").value(10))
                .andDo(document("get-users",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("페이지 번호"),
                                parameterWithName("size").description("페이지 크기")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과데이터"),
                                        fieldWithPath("data[0].id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data[0].displayName").type(JsonFieldType.STRING).description("유저 이름"),
                                        fieldWithPath("data[0].email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("data[0].profileUrl").type(JsonFieldType.STRING).description("프로필 이미지 주소"),
                                        fieldWithPath("data[0].reputation").type(JsonFieldType.NUMBER).description("명성"),
                                        fieldWithPath("data[0].location").type(JsonFieldType.STRING).description("회원 지역"),
                                        fieldWithPath("data[0].role").type(JsonFieldType.STRING).description("회원 등급"),
                                        fieldWithPath("data[0].answers").type(JsonFieldType.NULL).description("회원 답변 리스트"),
                                        fieldWithPath("data[0].questions").type(JsonFieldType.NULL).description("회원 질문 리스트"),
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
        Long userId = 1L;
        doNothing().when(userService).deleteUser(Mockito.anyLong(), Mockito.any(AuthInfo.class));

        // when
        ResultActions actions = mockMvc.perform(
                delete("/api/users/{userId}", userId)
                        .with(SecurityMockMvcRequestPostProcessors.csrf()));

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document("delete-user",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("회원 식별자")
                        )
                ));
    }

}