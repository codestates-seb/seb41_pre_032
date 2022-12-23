import Sidebar from '../Components/Sidebar';
import QuestionList from '../Components/QuestionList';
import styled from 'styled-components';
import useFetch from '../util/useFetch';

// 새로운 페이지에 아래 스타일 컴포넌트를 최상단에 깔아줘야함
const HomeWrap = styled.div`
  width:100%;
  max-width:1264px;
  margin:0 auto ;
  display:flex;
  justify-content:space-between;
  text-align:left;
`
function Home() {
  const [data, isPending, error] = useFetch(`http://localhost:4000/question`);
  return (
    <HomeWrap>
      <Sidebar />
      <QuestionList questions={data} isPending={isPending} error={error}/>
    </HomeWrap>
  );
}

export default Home;
