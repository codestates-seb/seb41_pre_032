import styled from "styled-components";
import LoginInfo from "../Components/LoginInfo";

const Loginwrap = styled.div`
  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 0;
    padding: 0;
    border: 0;
  }


`;

const Login = () => {
  return (
    <Loginwrap>
      <div className="login-form">
        <div>
          <img src="../images/64px-Stack_Overflow_icon.png" alt="logo_image" />
        </div>

        <LoginInfo />
        {/* 아이디와 비밀번호를 입력하는 컴포넌트 */}
      </div>
    </Loginwrap>
  );
};
export default Login;
