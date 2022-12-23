import styled from "styled-components";
import Notice from "../Components/QuestionCreate/Notice";
import Title from '../Components/QuestionCreate/Title'
import Problem from '../Components/QuestionCreate/Problem'
import Expecting from '../Components/QuestionCreate/Expecting'
import Tags from '../Components/QuestionCreate/Tags'

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
const QuestionCreate = () => {
  // const [isFocus, setIsFocus] = useState(0)
  return (
    <CreateWrap>
      <div className="createContainer">
        <Notice />
        <Title />
        <Problem />
        <Expecting />
        <Tags />
        <div className="">
          <button className="" type="button" autoComplete="off">
            Review your question
          </button>
          {/* 이 버튼을 누르면 데이터가 전송되서 홈화면 상단에 위치해야합니다. */}

          <div className="">
            <button className="" type="button">
              Discard draft
            </button>
            {/* 이 버튼을 누르면 위에서부터 입력했던 모든 입력값이 초기화 되어야합니다 */}
            {/* 정말 삭제할 것인지 확인하는 모달창이 떠야하지만 아직 구현하지 못했습니다. */}
          </div>
        </div>

        {/* 여기까지 버튼 섹션 */}
      </div>
    </CreateWrap>
  );
};

export default QuestionCreate;
