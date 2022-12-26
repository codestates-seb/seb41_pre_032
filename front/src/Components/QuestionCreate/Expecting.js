import styled from "styled-components";

const AskWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0 0 1.6rem 0;
  > .ask-main {
    flex-basis: 70%;
    padding: 2.4rem;
    background-color: #fff;
    border: 1px solid hsl(210, 8%, 90%);
    border-radius: 3px;
    >label {
      font-size:1.5rem;
      font-weight:bold;
    }
    >.desc {
      font-size:1.2rem;
      padding:0 .2rem;
      margin: .2rem 0;
    }
    >textarea {
      width: 100%;
      height: 20rem;
      padding: .8rem .9rem;
      border:1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      color:hsl(210, 8%, 5%);
      font-size:1.3rem;
      resize:none;
    }
  }
`;

const AskSub = styled.div`
  flex-basis: calc(30% - 25px);
  position: relative;
  display: ${props => props.isFocus === 2 ? "block" : "none"};
  > .sub-desc {
    right: 0;
    position: absolute;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    background-color: #fff;
    > p {
      padding: 1.2rem;
      font-size: 1.5rem;
      background-color: hsl(210, 8%, 97.5%);
      border-bottom: 1px solid hsl(210, 8%, 85%);
    }
    > .sub-desc-flex {
      display: flex;
      margin: 1.6rem;
      > .flex-item {
        margin: 0 0.8rem;
        font-size: 1.2rem;
        > p {
          margin-bottom: 1.2rem;
        }
        > p:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const Expecting = ({ isFocus, setIsFocus, attemptBind }) => {
  return (
    <AskWrap>
      <div className="ask-main">
        <label htmlFor="attempt">What did you try and what were you expecting?</label>
        <p className="desc">
        Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
        </p>
        <textarea
          id="attempt"
          name="attempt"
          {...attemptBind}
          onClick={() => {setIsFocus(2)}}
        />
      </div>
      <AskSub isFocus={isFocus}>
        <div className="sub-desc">
          <p>Expand on the problem</p>
          <div className="sub-desc-flex">
            <div className="flex-item">
              <img src="../images/create.png" alt="" />
            </div>
            <div className="flex-item">
              <p>Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.</p>
              <p>
              Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example.
              </p>
              <p>Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.</p>
            </div>
          </div>
        </div>
      </AskSub>
    </AskWrap>
  );
};

export default Expecting;