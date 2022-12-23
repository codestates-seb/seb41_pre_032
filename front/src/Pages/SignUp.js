import SignIntro from "../Components/SignupIntro";
import SignupInfo from "../Components/SignInfo";
import styled from "styled-components";

const SignupWrap = styled.div`
  background-color: hsl(210, 8%, 95%);
  >.signUpContainer {
    width:100%;
    max-width:126.4rem;
    height: calc(100vh - 50px);
    margin:0 auto;
    padding:2.4rem;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;

const SignUp = () => {
  return (
    <SignupWrap>
      <div className="signUpContainer">
        <SignIntro />
        <SignupInfo />
      </div>
    </SignupWrap>
  );
};

export default SignUp;
