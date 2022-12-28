import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import QuestionCreate from "./Pages/QuestionCreate";
import QuestionView from "./Pages/QuestionView";
import SignUp from "./Pages/SignUp";
import Tags from "./Pages/Tags";
import Users from "./Pages/users";
import Companies from "./Pages/Companies";
import UserInfo from "./Pages/UserInfo";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 로그인이 되면 위 화면을 렌더링 */}
          <Route path="/login" element={<Login />} />
          {/* 로그인이 되지 않으면 위 화면을 렌더링 */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/question/:id" element={<QuestionView />} />
          <Route path="/question/create" element={<QuestionCreate />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="userinfo" element={<UserInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
