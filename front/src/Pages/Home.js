import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

function Home() {
  return (
    <div className="">
      <div className="">
          <Sidebar />
      </div>
      <div className="">
            <h2 className="">All Questions</h2>
            <Link to="/question/create" className="">
              Ask Question
            </Link>
            <h2>[질문답변이 업로드 되는 컴포넌트 구현필요]</h2>
          </div>
    </div>
  );
}

export default Home;
