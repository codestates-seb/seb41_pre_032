import { Link } from "react-router-dom";
import styled from 'styled-components';
import Question from './Question'
import Loading from "./Loading";

const ListWrap = styled.div`
  width: 100%;
  padding: 2.4rem;

  .question-top-box{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .all-question-title {
    display: inline-block;
  }

  .button-ask-question {
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    color: white;
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    display: inline-block;
    font-weight: normal;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
  }
`;

const QuestionList = ({questions, isPending}) => {
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
        {isPending && <Loading />}
        {questions ? questions.map(data => (
          <Question key={data.id} data={data}/>
        )) : null}
      </ul>
    </div>
    </ListWrap>
  );
};
export default QuestionList;
