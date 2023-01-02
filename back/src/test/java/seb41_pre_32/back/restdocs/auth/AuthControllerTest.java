package seb41_pre_32.back.restdocs.auth;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.restdocs.operation.preprocess.Preprocessors;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import seb41_pre_32.back.auth.controller.AuthController;
import seb41_pre_32.back.auth.service.RefreshTokenService;
import seb41_pre_32.back.auth.utils.JwtTokenizer;

import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = AuthController.class,
        excludeFilters = {
                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = WebMvcConfigurer.class)})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class AuthControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private RefreshTokenService refreshTokenService;
    @MockBean
    private JwtTokenizer jwtTokenizer;
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    @WithMockUser
    public void refreshTest() throws Exception {
        // given
        doNothing().when(refreshTokenService).validateRefreshToken(Mockito.anyString(), Mockito.anyLong());

        // when
        ResultActions actions = mockMvc.perform(get("/auth/refresh")
                .header("Refresh", "refreshToken")
                .with(SecurityMockMvcRequestPostProcessors.csrf()));

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document("refresh-token",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Refresh").description("리프레시 토큰")
                        ),
                        responseHeaders(
                                headerWithName("Authorization").description("갱신 엑세스 토큰")
                        )
                ));
    }

    @Test
    @WithMockUser
    public void logoutTest() throws Exception {
        // given
        doNothing().when(refreshTokenService).deleteRefreshToken(Mockito.anyLong());

        // when
        ResultActions actions = mockMvc.perform(get("/auth/logout")
                .header("Refresh", "refreshToken")
                .header("Authorization", "Bearer authorizationToken")
                .with(SecurityMockMvcRequestPostProcessors.csrf()));

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document("user-logout",
                        Preprocessors.preprocessRequest(Preprocessors.prettyPrint()),
                        Preprocessors.preprocessResponse(Preprocessors.prettyPrint()),
                        requestHeaders(
                                headerWithName("Authorization").description("엑세스 토큰"),
                                headerWithName("Refresh").description("리프레시 토큰")
                        )
                ));
    }

}