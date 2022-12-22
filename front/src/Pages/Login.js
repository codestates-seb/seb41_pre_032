import styled from "styled-components";
import LoginInfo from "../Components/LoginInfo";

const Loginwrap = styled.div`
background-color: hsl(210, 8%, 95%);

>.loginContainer {
  width:100%;
  max-width:126.4rem;
  height: calc(100vh - 50px);
  margin:0 auto;
  padding:2.4rem;
  display:flex;
  justify-content: center;
  align-items: center;
  .login-form {
    display: flex;
    flex-direction: column;
    align-items:center;
    >img {
      width:max-content;
      margin-bottom:2.4rem;
    }
  }
}


`;

const Login = () => {
  return (
    <Loginwrap>
      <div className="loginContainer">
        <div className="login-form">
            <img src="../images/64px-Stack_Overflow_icon.png" alt="logo_image" />
          <LoginInfo />
          {/* 아이디와 비밀번호를 입력하는 컴포넌트 */}
        </div>
      </div>
    </Loginwrap>
  );
};
export default Login;
