import Sidebar from '../Components/Sidebar';
import QuestionList from '../Components/QuestionList';
import styled from 'styled-components';
import useFetch from '../util/useFetch';
import Footer from '../Components/Footer';

// 새로운 페이지에 아래 스타일 컴포넌트를 최상단에 깔아줘야함

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

function Home() {
  const [data, isPending, error] = useFetch(
    `${process.env.REACT_APP_API_URL}/api/questions?page=1&size=100`
  );
  return (
    <HomeContainer>
      <HomeWrap>
        <Sidebar />

        <QuestionList
          title='Top Questions'
          data={data}
          isPending={isPending}
          error={error}
        />
      </HomeWrap>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
