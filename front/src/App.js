import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import QuestionCreate from './Pages/QuestionCreate';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/question/create" element={<QuestionCreate />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
