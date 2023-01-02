import styled from 'styled-components';
import Title from '../Components/QuestionCreate/Title';
import Problem from '../Components/QuestionCreate/Problem';
import Expecting from '../Components/QuestionCreate/Expecting';
import Tags from '../Components/QuestionCreate/Tags';
import { useEffect, useState } from 'react';
import { fetchPatch } from '../util/api';
import useInput from '../util/useInput';
import useFetch from '../util/useFetch';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModifiedWrap = styled.section`
  background-color: hsl(210, 8%, 95%);
  > .modifiedContainer {
    width: 100%;
    max-width: 1264px;
    margin: 0 auto;
    padding: 0 2.4rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    > .notice-header {
      width: 100%;
      display: flex;
      align-items: center;
      height: 13rem;
      margin-bottom: 1.6rem;
      background-image: url('../images/question--create--img.png');
      background-repeat: no-repeat;
      background-position: right bottom;
      > h1 {
        font-weight: 800;
        font-size: 2.7rem;
        margin: 2.4rem 0;
        line-height: 1.3;
      }
    }
  }
`;
const BtnArea = styled.div`
  display: flex;
  margin: 1.2rem 0 4.8rem;
  > button,
  div {
    padding: 1rem;
    margin: 0 0.8rem;
    border-radius: 3px;
    font-size: 1.3rem;
    border: 1px solid transparent;
    cursor: pointer;
  }
  > .submit {
    margin-left: 0;
    color: #fff;
  }
  > .submit:hover {
    background-color: #0074cc;
  }
`;

const SubmitBtn = styled.button`
  pointer-events: ${(props) => (props.activebtn === 0 ? 'none' : 'unset')};
  background-color: ${(props) => (props.activebtn === 0 ? '#aaa' : '#0a95ff')};
`;
const QuestionModified = () => {
  const { id } = useParams();
  const [data, isPending, error] = useFetch(
    `${process.env.REACT_APP_API_URL}/api/questions/${id}`
  );
  const isFocus = -1;
  const setIsFocus = () => {
    return isFocus;
  };
  const [title, titleBind, titleReset] = useInput('');
  const [contents, contentsBind, contentsReset] = useInput('');
  const [attempt, attemptBind, attemptReset] = useInput('');
  const [taglist, setTaglist] = useState([]);
  const [submitActive, setSubmitActive] = useState(0);
  useEffect(() => {
    if (data) {
      titleReset(data.title);
      contentsReset(data.contents);
      attemptReset(data.attempt);
      setTaglist(
        data.tags.map((tag) => {
          return tag.tagName;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (title && contents && attempt && taglist.length >= 1) {
      setSubmitActive(1);
    } else {
      setSubmitActive(0);
    }
  }, [attempt, contents, taglist, title]);

  const handleSubmit = () => {
    const data = { title, contents, attempt };
    fetchPatch(`${process.env.REACT_APP_API_URL}/api/questions/`, id, data);
  };
  return (
    <BodyWrap>
      <ModifiedWrap>
        {error && <div>{error}</div>}
        {isPending && <></>}
        {data && (
          <div className='modifiedContainer'>
            <div className='notice-header'>
              <h1>Modified a question</h1>
            </div>
            <Title
              isFocus={isFocus}
              setIsFocus={setIsFocus}
              titleBind={titleBind}
            />
            <Problem
              isFocus={isFocus}
              setIsFocus={setIsFocus}
              contentsBind={contentsBind}
            />
            <Expecting
              isFocus={isFocus}
              setIsFocus={setIsFocus}
              attemptBind={attemptBind}
            />
            <Tags
              isFocus={isFocus}
              setIsFocus={setIsFocus}
              tags={taglist}
              setTags={setTaglist}
            />
            <BtnArea>
              <SubmitBtn
                className='submit'
                type='button'
                autoComplete='off'
                onClick={() => handleSubmit()}
                activebtn={submitActive}>
                Modified your question
              </SubmitBtn>
            </BtnArea>
          </div>
        )}
      </ModifiedWrap>
      <Footer />
    </BodyWrap>
  );
};

export default QuestionModified;
