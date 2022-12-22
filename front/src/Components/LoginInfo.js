import styled from "styled-components";

const Logininfowrap = styled.div`
  .login-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .google_buttonimage {
    vertical-align: baseline;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    width: 18px;
    height: 18px;
  }

  .form-container {
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    padding: calc(24px * 1);
    margin-bottom: calc(24 * 1);
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: 7px;
    box-sizing: inherit;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
    margin: calc(12px * 1) / 2 * -1;
    box-sizing: inherit;
  }
  .email-container {
    margin-right: 0;
    margin-left: 0;
    margin: calc(12px * 1) / 2;
    display: flex;
    flex-direction: column;
    box-sizing: inherit;
  }

  .email-label {
    margin-left: 0;
    margin-right: 0;
    cursor: pointer;
    font-weight: 500;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .login-input-box {
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

  .login-button {
    background-color: hsl(206, 100%, 52%);
    color: white;
    border-radius: 3px;
    padding: 0.7em;
    width: 100%;
    border: none;
    cursor: pointer;
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
  }

  .googlelogo {
    width: 18px;
    height: 18px;
    object-fit: cover;
  }
`;

const LoginInfo = () => {
  return (
    <Logininfowrap>
        <div>
      <button className="googlelogin-button">
          <img src="../images/googlebutton.png" className="googlelogo" />
          Log in with Google
        </button>


        <div className="form-container">
          <form className="login-form">
            <div className="email-container">
              <div className="email-label">Email</div>
              <input type="Email" className="login-input-box" />
            </div>
            <div className="">
              <div className="">
                <div className="email-label">Password</div>
              </div>
              <input type="password" className="login-input-box" />
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
        </div>
      </div>
    </Logininfowrap>
  );
};

export default LoginInfo;
