import styled from "styled-components";

const IntroWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-right: 4.8rem;

  .introduce-title {
    line-height: 1;
    margin-bottom: 32px;
    font-weight:400;
  }
  .introduce-box {
    display: flex;
    margin-bottom: calc(24px * 1);
    box-sizing: inherit;
    >img {
      margin: 0 0.8rem 0 0;
    }
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
        <ul>
          <li className="introduce-box">
            <img src="../images/question.png" alt="" />
            <p className="introduce-text">Get unstuck — ask a question</p>
          </li>
          <li className="introduce-box">
            <img src="../images/commenting.png" alt="" />
            <p className="introduce-text">Unlock new privileges like voting and commenting</p>
          </li>
          <li className="introduce-box">
            <img src="../images/tags.png" alt="" />
            <p className="introduce-text">Save your favorite tags, filters, and jobs</p>
          </li>
          <li className="introduce-box">
            <img src="../images/badges.png" alt="" />
            <p className="introduce-text">Earn reputation and badges</p>
          </li>
        </ul>
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
