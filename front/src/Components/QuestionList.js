import { Link } from "react-router-dom";
import styled from 'styled-components';
import Question from './Question'

const ListWrap = styled.div`
  width:100%;
  padding:2.4rem;
`

const QuestionList = () => {
  return (
    <ListWrap>
    <div className="">
      <div>
        <h2 className="">All Questions</h2>
        <Link to="/question/create" className="">
          Ask Question
        </Link>
      </div>
      <ul>
        <Question />
      </ul>
    </div>
    </ListWrap>
  );
};
export default QuestionList;
