import { Link } from "react-router-dom";
import styled from 'styled-components';
import Question from './Question'
import Loading from "./Loading";

const ListWrap = styled.div`
  width:100%;
  padding:2.4rem;
`

const QuestionList = ({questions, isPending}) => {
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
