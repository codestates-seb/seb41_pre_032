import styled from 'styled-components';
import Notice from '../Components/QuestionCreate/Notice';
import Title from '../Components/QuestionCreate/Title';
import Problem from '../Components/QuestionCreate/Problem';
import Expecting from '../Components/QuestionCreate/Expecting';
import Tags from '../Components/QuestionCreate/Tags';
import Discard from '../Components/QuestionCreate/Discard';
import { useEffect, useState } from 'react';
import { fetchCreate } from '../util/api';
import useInput from '../util/useInput';
import Footer from '../Components/Footer';
import useAuth from '../util/useAuth';

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateWrap = styled.section`
  background-color: hsl(210, 8%, 95%);
  > .createContainer {
    width: 100%;
    max-width: 1264px;
    margin: 0 auto;
    padding: 0 2.4rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
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
  > .discard {
    color: #c22e32;
  }
  > .discard:hover {
    background-color: #fdf2f2;
    color: #ab262a;
  }
`;
const SubmitBtn = styled.button`
  pointer-events: ${(props) => (props.activebtn === 0 ? 'none' : 'unset')};
  background-color: ${(props) => (props.activebtn === 0 ? '#aaa' : '#0a95ff')};
`;

const QuestionCreate = () => {
  const { auth } = useAuth();
  const [isFocus, setIsFocus] = useState(0);
  const [title, titleBind, titleReset] = useInput('');
  const [contents, contentsBind, contentsReset] = useInput('');
  const [attempt, attemptBind, attemptReset] = useInput('');
  const [taglist, setTaglist] = useState([]);
  const [discardActive, setDiscardActive] = useState(0);
  const [submitActive, setSubmitActive] = useState(0);

  useEffect(() => {
    if (title && contents && attempt && taglist.length >= 1) {
      setSubmitActive(1);
    } else {
      setSubmitActive(0);
    }
  }, [attempt, contents, taglist, title]);

  const handleSubmit = () => {
    const data = { title, contents, attempt, taglist, vote: 0 };
    fetchCreate(`${process.env.REACT_APP_API_URL}/api/questions`, data, auth.accessToken, auth.refreshToken);
  };

  const handleOnChangeDiscard = () => {
    discardActive === 0 ? setDiscardActive(1) : setDiscardActive(0);
  };

  const deleteContent = () => {
    titleReset('');
    contentsReset('');
    attemptReset('');
    setTaglist([]);
  };
  return (
    <BodyWrap>
      <CreateWrap>
        <div className='createContainer'>
          <Notice />
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
              Review your question
            </SubmitBtn>
            <div
              className='discard'
              type='button'
              onClick={() => handleOnChangeDiscard()}>
              Discard draft
            </div>
          </BtnArea>
          <Discard
            active={discardActive}
            deleteContent={deleteContent}
            handleDiscard={handleOnChangeDiscard}
          />
        </div>
      </CreateWrap>
      <Footer />
    </BodyWrap>
  );
};

export default QuestionCreate;
