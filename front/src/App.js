import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import QuestionCreate from "./Pages/QuestionCreate";
import QuestionView from "./Pages/QuestionView";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/question/:id" element={<QuestionView />} />
          <Route path="/question/create" element={<QuestionCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
