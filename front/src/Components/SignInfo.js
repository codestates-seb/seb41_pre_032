import styled from "styled-components";

const SignupInfoWrap = styled.div`
  .input-box {
    margin-left: 0;
    margin-right: 0;
    margin: 4px * 1 / 2;
    position: relative;
    display: flex;
    box-sizing: inherit;
    padding-top: 0.5em;
    padding-right: 0.7em;
    padding-bottom: 0.6em;
    padding-left: 0.7em;
    margin-bottom: 1em;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    background-color: white;
  }

  .signup-button {
    background-color: hsl(206, 100%, 52%);
    color: white;
    border-radius: 3px;
    padding: 0.7em;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  .font-bold {
    margin-left: 0;
    margin-right: 0;
    cursor: pointer;
    font-weight: 500;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .font-etc {
    color: hsl(210, 8%, 45%);
    font-size: 13px;
    vertical-align: baseline;
    text-align: left;
    margin-bottom: 10px;
  }

  .sign-form-container {
    background-color: white;
  }
`;

const SignupInfo = () => {
  return (
    <SignupInfoWrap>
      <div className="">
        <div className="">
          <form className="sign-form-container">
            <div className="">
              <div className="font-bold">Display name</div>
              <input type="text" className="input-box"></input>
            </div>
            <div className="">
              <div className="font-bold">Email</div>
              <input type="Email" className="input-box"></input>
            </div>
            <div className="">
              <div className="font-bold">Password</div>
              <input type="password" className="input-box"></input>
              <p className="font-etc">
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            </div>
            <button type="submit" className="signup-button">
              Sign up
            </button>
            <div className="hidden">
              <label htmlFor="file-input"></label>
            </div>
            <div className="caption">
              <p className="font-etc">
                By clickigng "Sign up", you agree to our terms of service,
                privacy policy and cookie policy
              </p>
            </div>
          </form>
        </div>
        <div className="">
          <p className="">Already have an account?</p>
          <a href="./login" className="">
            {" "}
            Log in{" "}
          </a>
        </div>
      </div>
    </SignupInfoWrap>
  );
};

export default SignupInfo;
