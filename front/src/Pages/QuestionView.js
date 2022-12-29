import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import useFetch from "../util/useFetch";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { fetchDelete } from "../util/api";
import { useState } from "react";
import PostCell from "../Components/QuestionView/PostCell";

const ViewWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
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
  > .question-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    > h2 {
      font-size: 2.7rem;
      margin-bottom: 0.8rem;
      font-weight: normal;
    }
    > .button-ask-question {
      margin-left: 1.2rem;
      height: max-content;
    }
  }
  > .fw-wrap {
    display: flex;
    padding-bottom: 0.8rem;
    margin-bottom: 1.6rem;
    flex-wrap: wrap;
    border-bottom: 1px solid hsl(210, 8%, 90%);
    > .fw-item {
      margin: 0 1.6rem 0.8rem 0;
      font-size: 1.3rem;
      > span:first-child {
        color: #6a737c;
        margin-right: 0.4rem;
      }
    }
  }
`;
const QuestionView = () => {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const { id } = useParams();
  const [data, isPending, error] = useFetch(
    `${process.env.REACT_APP_API_URL}/api/questions/${id}`
  );
  console.log(data);
  let createdDate;
  let updatedDate;
  if (data) {
    createdDate = `${data.createdDate.slice(0, 10)} ${data.createdDate.slice(
      -8
    )}`;
    updatedDate = `${data.updatedDate.slice(0, 10)} ${data.updatedDate.slice(
      -8
    )}`;
  }

  const handleDelete = () => {
    fetchDelete(`${process.env.REACT_APP_API_URL}/api/questions/`, id);
  };
  const handleUpVote = (e) => {
    upVote === 0 ? setUpVote(1) : setUpVote(0);
  };
  const handleDownVote = (e) => {
    downVote === 0 ? setDownVote(1) : setDownVote(0);
  };
  return (
    <ViewWrap>
      <Sidebar />
      <Content>
        {isPending && <Loading />}
        {error && <div>{error}</div>}
        {data && (
          <>
            <div className="question-header">
              <h2>{data.title}</h2>
              <Link to="/question/create" className="button-ask-question">
                Ask Question
              </Link>
            </div>
            <div className="fw-wrap">
              <div className="fw-item">
                <span>Asked</span>
                <time>{createdDate}</time>
              </div>
              <div className="fw-item">
                <span>Modified</span>
                <time>{updatedDate}</time>
              </div>
              <div className="fw-item">
                <span>Viewed</span>
                <span>{`${0} times`}</span>
              </div>
            </div>
            <PostCell
              data={data}
              createdDate={createdDate}
              upVote={upVote}
              downVote={downVote}
              handleDelete={handleDelete}
              handleUpVote={handleUpVote}
              handleDownVote={handleDownVote}
            />
            <article className="answers-layout">
              <h2 className="answers-notice">
                Know someone who can answer? Share a link to this question via
                email, Twitter, or Facebook.
              </h2>
            </article>
          </>
        )}
      </Content>
    </ViewWrap>
  );
};

export default QuestionView;
