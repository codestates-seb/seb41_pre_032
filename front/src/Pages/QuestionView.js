import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import useFetch from "../util/useFetch";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
const ViewWrap = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;
const Content = styled.section`
  width: 100%;
  border: 1px solid hsl(210, 8%, 85%);
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
  padding: 2.4rem;
  box-sizing: border-box;
`;
const QuestionView = () => {
  const { id } = useParams();
  const [data, isPending, error] = useFetch(
    `http://localhost:4000/question/${id}`
  );
  return (
    <ViewWrap>
      <Sidebar />
      <Content>
        {isPending && <Loading />}
        {error && <div>{error}</div>}
        {data && (
          <div className="question-header">
            <h2>{data.title}</h2>
            <Link to="/question/create" className="">
              Ask Question
            </Link>
          </div>
        )}
      </Content>
    </ViewWrap>
  );
};

export default QuestionView;
