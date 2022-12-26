import styled from "styled-components";

const QuestionNotice = styled.div`
  display: flex;
  flex-direction: column;
  > .notice-header {
    width: 100%;
    display: flex;
    align-items: center;
    height: 13rem;
    background-image: url("../images/question--create--img.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    > h1 {
      font-weight: 800;
      font-size: 2.7rem;
      margin: 2.4rem 0;
      line-height: 1.3;
    }
  }
  > .good-question {
    width: 70%;
    margin: 1.6rem 0;
    padding: 2.4rem;
    background-color: #ebf4fb;
    border: 1px solid #aecdea;
    color: #3b4045;
    font-size: 1.3rem;
    border-radius: 3px;
    > h2 {
      font-weight: 400;
      font-size: 2.1rem;
      margin-bottom: 0.8rem;
    }
    > p {
      font-size: 1.5rem;
    }
    > p:nth-child(3) {
      margin-bottom: 1.5rem;
    }
    > .good-question-list {
      list-style: disc;
      > h5 {
        font-size: 1.3rem;
        margin-bottom: 0.8rem;
      }
      li {
        margin-left: 3rem;
      }
    }
  }
`;

const Notice = () => {
  return (
    <QuestionNotice>
      <div className="notice-header">
        <h1>Ask a question</h1>
      </div>
      <div className="good-question">
        <h2>Writing a good question</h2>
        <p>
          You’re ready to
          <a
            href="https://stackoverflow.com/help/how-to-ask"
            target="_blank"
            rel="noreferrer"
          >
            ask
          </a>
          a{" "}
          <a
            href="https://stackoverflow.com/help/on-topic"
            target="_blank"
            rel="noreferrer"
          >
            programming-related question
          </a>
          and this form will help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See{" "}
          <a
            href="https://stackexchange.com/sites#technology-traffic"
            target="_blank"
            rel="noreferrer"
          >
            the topics here
          </a>{" "}
          to find a relevant site.
        </p>

        <ul className="good-question-list">
          <h5>Steps</h5>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
    </QuestionNotice>
  );
};
export default Notice;
