import { Link } from "react-router-dom";
import styled from "styled-components";
import Question from "./Question";
import Loading from "./Loading";

const ListWrap = styled.div`
  width: 100%;
  padding: 2.4rem;
  border-left: 1px solid hsl(210, 8%, 85%);
  .question-top-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .all-question-title {
    display: inline-block;
  }
  h2 {
    font-size: 27px;
    font-weight: 400;
    margin: 0px 12px 12px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const QuestionList = ({ questions, isPending, error }) => {
  return (
    <ListWrap>
      <div>
        <div className="question-top-box">
          <h2 className="all-question-title">All Questions</h2>
          <Link to="/question/create" className="button-ask-question">
            Ask Question
          </Link>
        </div>
        <ul>
          {error && <div>{error}</div>}
          {isPending && <Loading />}
          {questions
            ? questions.map((data) => <Question key={data.id} data={data} />)
            : null}
        </ul>
      </div>
    </ListWrap>
  );
};
export default QuestionList;
