import styled from "styled-components";
import { fetchCreate } from "../../util/api";
import useInput from "../../util/useInput";

const AnswerCreateWrap = styled.form`
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
`;
const PostBtn = styled.button`
  pointer-events: ${props => props.activebtn > 0 ? 'unset' : 'none'};
  background-color:${props => props.activebtn > 0 ? '#0a95ff' : '#aaa'};
`
const AnswerCreate = ({ id }) => {
  // eslint-disable-next-line no-unused-vars
  const [contents, contentsBind, contentsReset] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { questionId: id, contents };
    fetchCreate(`${process.env.REACT_APP_API_URL}/api/answers`, data);
  };
  return (
    <AnswerCreateWrap>
      <h2>Your Answer</h2>
      <textarea id="contents" name="contents" {...contentsBind} />
      <PostBtn
        onClick={(e) => {
          handleSubmit(e);
        }}
        activebtn={contents.length}
      >
        Post Your Answer
      </PostBtn>
    </AnswerCreateWrap>
  );
};

export default AnswerCreate;
