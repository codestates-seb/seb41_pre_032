import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupInfoWrap = styled.div`
  width: 32rem;
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

  .font-etc {
    color: hsl(210, 8%, 45%);
    font-size: 13px;
    vertical-align: baseline;
    text-align: left;
    margin-bottom: 0.4rem;
    margin-top: 0.4rem;
  }

  .sign-form-container {
    background-color: white;
    padding: 2.4rem;
    border-radius: 7px;
    margin-bottom: 2.4rem;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  }
  .googlelogin-button {
    background-color: white;
    margin-left: 0;
    margin-right: 0;
    margin: 4px * 1 / 2;
    position: relative;
    display: flex;
    box-sizing: inherit;
    padding: 0.6em;
    margin-bottom: 1em;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    background-color: white;
    width: 100%;
    justify-content: center;
    > .googlelogo {
      width: 18px;
      height: 18px;
      object-fit: cover;
    }
  }

  .input-container {
    margin: .6rem;
    margin-right: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    box-sizing: inherit;
    
    >label {
      font-size:1.5rem;
      font-weight:600;
      padding:0 .2rem;
      margin:.2rem 0;
    }
    >input {
      width:100%;
      margin:0;
      padding:.7rem .6rem;
      border: 1px solid hsl(210,8%,75%);
      border-radius:3px;
      color: hsl(210,8%,5%);
      font-size:1.3rem;
    }
  }

  .ps-container{
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    padding: 1.6rem;
    margin-bottom: 2.4rem;
    > a {
      color: #0074cc;
    }
  }
`;

const SignupInfo = () => {
  return (
    <SignupInfoWrap>
      <div className="sns-container">
        <button className="googlelogin-button">
          <img alt="" src="../images/googlebutton.png" className="googlelogo" />
          Log in with Google
        </button>
      </div>
      <form className="sign-form-container">
        <div className="input-container">
          <label htmlFor="display-name">Display name</label>
          <input type="text" id="display-name"></input>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="Email" id="email"></input>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
          <p className="font-etc">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
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
            By clickigng "Sign up", you agree to our terms of service, privacy
            policy and cookie policy
          </p>
        </div>
      </form>
      <div className="ps-container">
        <span>Already have an account? </span>
        <Link to="/login">Log in</Link>
      </div>
    </SignupInfoWrap>
  );
};

export default SignupInfo;
