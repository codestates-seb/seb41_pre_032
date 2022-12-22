import styled from "styled-components";

const IntroWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  .introduce-title {
    line-height: 1;
    margin-bottom: calc(32px * 1);
  }
  .introduce-box {
    display: flex;
    margin-bottom: calc(24px * 1);
    box-sizing: inherit;
  }
  .introduce-text {
    font-size: 1.55rem;
  }

  .introduce-etc {
    color: hsl(210, 8%, 45%);
    font-size: 13px;
    vertical-align: baseline;
    text-align: left;
    > a {
      color: blue;
    }
  }
`;

const SignIntro = () => {
  return (
    <IntroWrap>
      <div className="intro-container">
        <h2 className="introduce-title">Join the Stack Overflow community</h2>

        <div className="introduce-box">
          <div className="introduce-text">Get unstuck — ask a question</div>
        </div>
        <div className="introduce-box">
          <div className="introduce-text">
            Unlock new privileges like voting and commenting
          </div>
        </div>
        <div className="introduce-box">
          <div className="introduce-text">
            Save your favorite tags, filters, and jobs
          </div>
        </div>
        <div className="introduce-box">
          <div className="introduce-text">Earn reputation and badges</div>
        </div>
        <div className="introduce-etc">
          Collaborate and share knowledge with a private group for FREE.
          <br />
          <a href="/">Get Stack Overflow for Teams free for up to 50 users.</a>
        </div>
      </div>
    </IntroWrap>
  );
};

export default SignIntro;
