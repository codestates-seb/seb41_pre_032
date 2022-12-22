import Sidebar from '../Components/Sidebar';
import QuestionList from '../Components/QuestionList';
import styled from 'styled-components';
import useFetch from '../util/useFetch';

const HomeWrap = styled.div`
  display:flex;
  justify-content:space-between;
  text-align:left;
`
function Home() {
  const [data, isPending, error] = useFetch(`http://localhost:4000/question`);
  return (
    <HomeWrap>
      <Sidebar />
      <QuestionList questions={data} isPending={isPending}/>
    </HomeWrap>
  );
}

export default Home;
