import SignIntro from "../Components/SignupIntro";
import SignupInfo from "../Components/SignInfo";
import styled from "styled-components";

const SignupWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: hsl(210, 8%, 95%);

.y{

}
`;

const SignUp = () => {
  return (
    <SignupWrap>
      <div className="signup-container">
        <div className="y">
          <SignIntro />
          <SignupInfo />
        </div>
      </div>
    </SignupWrap>
  );
};

export default SignUp;
