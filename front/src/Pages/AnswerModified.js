import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import Sidebar from '../Components/Sidebar';
import { fetchPatch } from '../util/api';
import useFetch from '../util/useFetch';
import useInput from '../util/useInput';

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModifiedWrap = styled.section`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: left;
  > .answerModified {
    width: 100%;
    padding: 2.4rem;
    border-left: 1px solid hsl(210, 8%, 85%);
    > h2 {
      padding-top: 2rem;
      margin-bottom: 2rem;
      font-size: 1.9rem;
      color: #232629;
      font-weight: 400;
    }
    > textarea {
      width: 100%;
      height: 20rem;
      padding: 0.8rem 0.9rem;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      color: hsl(210, 8%, 5%);
      font-size: 1.3rem;
      resize: none;
    }
    > button {
      padding: 1rem;
      margin: 1rem 0 1.5rem;
      border-radius: 3px;
      font-size: 1.3rem;
      border: 1px solid transparent;
      cursor: pointer;
      margin-left: 0;
      color: #fff;
    }
    > button:hover {
      background-color: #0074cc;
    }
  }
`;
const PatchBtn = styled.button`
  pointer-events: ${(props) => (props.activebtn > 0 ? 'unset' : 'none')};
  background-color: ${(props) => (props.activebtn > 0 ? '#0a95ff' : '#aaa')};
`;
const AnswerModified = () => {
  const { id } = useParams();
  const [data, isPending, error] = useFetch(
    `${process.env.REACT_APP_API_URL}/api/answers/${id}`
  );
  // eslint-disable-next-line no-unused-vars
  const [contents, contentsBind, contentsReset] = useInput('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { contents };
    fetchPatch(`${process.env.REACT_APP_API_URL}/api/answers/`, id, data);
  };

  useEffect(() => {
    if (data) {
      contentsReset(data.contents);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <BodyWrap>
      <ModifiedWrap>
        <Sidebar />
        <article className='answerModified'>
          {error && <div>{error}</div>}
          {isPending && <Loading />}
          {data && (
            <>
              <h2>Answer</h2>
              <textarea id='contents' name='contents' {...contentsBind} />
              <PatchBtn
                onClick={(e) => {
                  handleSubmit(e);
                }}
                activebtn={contents.length}
              >
                Save edits
              </PatchBtn>
            </>
          )}
        </article>
      </ModifiedWrap>
      <Footer />
    </BodyWrap>
  );
};

export default AnswerModified;
