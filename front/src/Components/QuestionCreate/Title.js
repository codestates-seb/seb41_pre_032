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
    > label {
      font-size: 1.5rem;
      font-weight: bold;
    }
    > .desc {
      font-size: 1.2rem;
      padding: 0 0.2rem;
      margin: 0.2rem 0;
    }
    > input {
      width: 100%;
      padding: 0.8rem 0.9rem;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      color: hsl(210, 8%, 5%);
      font-size: 1.3rem;
    }
  }
`;

const AskSub = styled.div`
  flex-basis: calc(30% - 25px);
  position: relative;
  display: ${props => props.isFocus === 0 ? "block" : "none"};
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
const Title = ({ isFocus, setIsFocus, titleBind }) => {
  return (
    <AskWrap>
      <div className="ask-main">
        <label htmlFor="title">Title</label>
        <p className="desc">
          Be specific and imagine you’re asking a question to another person.
        </p>
        <input
          id="title"
          name="title"
          type="text"
          {...titleBind}
          maxLength="300"
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          data-min-length="15"
          data-max-length="150"
          onClick={() => setIsFocus(0)}
        />
      </div>
      <AskSub isFocus={isFocus}>
        <div className="sub-desc">
          <p>Writing a good title</p>
          <div className="sub-desc-flex">
            <div className="flex-item">
              <img src="../images/create.png" alt="" />
            </div>
            <div className="flex-item">
              <p>Your title should summarize the problem.</p>
              <p>
                You might find that you have a better idea of your title after
                writing out the rest of the question.
              </p>
            </div>
          </div>
        </div>
      </AskSub>
    </AskWrap>
  );
};

export default Title;
