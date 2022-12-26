import styled from "styled-components";
import Notice from "../Components/QuestionCreate/Notice";
import Title from "../Components/QuestionCreate/Title";
import Problem from "../Components/QuestionCreate/Problem";
import Expecting from "../Components/QuestionCreate/Expecting";
import Tags from "../Components/QuestionCreate/Tags";
import Discard from "../Components/QuestionCreate/Discard";
import { useEffect, useState } from "react";
import { fetchCreate } from "../util/api";
import useInput from "../util/useInput";

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
    background-color: #0a95ff;
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

const QuestionCreate = () => {
  const [isFocus, setIsFocus] = useState(0);
  const [questionShelf, setQuestionShelf] = useState({ vote: 0 });
  const [title, titleBind, titleReset] = useInput("");
  const [contents, contentsBind, contentsReset] = useInput("");
  const [attempt, attemptBind, attemptReset] = useInput("");
  const [tags, setTags] = useState([]);
  const [discardActive, setDiscardActive] = useState(0);
  useEffect(() => {
    let tagsData = questionShelf;
    questionShelf.tags = tags;
    setQuestionShelf(tagsData);
  }, [questionShelf, tags]);

  const handleSubmit = () => {
    const data = { title, contents, attempt, tags, vote: 0 };
    fetchCreate("http://localhost:4000/question/", data);
  };

  const handleOnChangeDiscard = () => {
    discardActive === 0 ? setDiscardActive(1) : setDiscardActive(0);
  };

  const deleteContent = () => {
    titleReset();
    contentsReset();
    attemptReset();
    setTags([]);
  };
  return (
    <CreateWrap>
      <div className="createContainer">
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
          tags={tags}
          setTags={setTags}
        />
        <BtnArea>
          <button
            className="submit"
            type="button"
            autoComplete="off"
            onClick={() => handleSubmit()}
          >
            Review your question
          </button>
          <div
            className="discard"
            type="button"
            onClick={() => handleOnChangeDiscard()}
          >
            Discard draft
          </div>
        </BtnArea>
        <Discard 
        active={discardActive} 
        deleteContent={deleteContent} 
        handleDiscard={handleOnChangeDiscard}/>
      </div>
    </CreateWrap>
  );
};

export default QuestionCreate;
