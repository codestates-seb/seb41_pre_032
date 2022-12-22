import Sidebar from '../Components/Sidebar';
import QuestionList from '../Components/QuestionList';
import styled from 'styled-components';

const HomeWrap = styled.div`
  display:flex;
  justify-content:space-between;
  text-align:left;
`
function Home() {
  return (
    <HomeWrap>
      <Sidebar />
      <QuestionList />
    </HomeWrap>
  );
}

export default Home;
