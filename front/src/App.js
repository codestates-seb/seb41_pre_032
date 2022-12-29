import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './GlobalStyle';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import QuestionCreate from './Pages/QuestionCreate';
import QuestionView from './Pages/QuestionView';
import SignUp from './Pages/SignUp';
import AllQuestions from './Pages/AllQuestions';
import Tags from './Pages/Tags';
import Users from './Pages/users';
import Companies from './Pages/Companies';
import UserInfo from './Pages/UserInfo';
import Footer from './Components/footer';
import EditProfile from './Pages/EditProfile';
import DeleteProfile from './Pages/DeleteProfile';
import RequireAuth from './Components/RequireAuth';
import Missing from './Components/Missing';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          {/* public routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/companies' element={<Companies />} />

          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
            <Route path='/question/:id' element={<QuestionView />} />
            <Route path='/question/create' element={<QuestionCreate />} />
            <Route
              path='/questions'
              element={
                <QueryClientProvider client={queryClient}>
                  <AllQuestions />
                </QueryClientProvider>
              }
            />
            <Route path='/users' element={<Users />} />
            <Route path='/userinfo' element={<UserInfo />} />
            <Route path='/userinfo/edit' element={<EditProfile />} />
            <Route path='/userinfo/delete' element={<DeleteProfile />} />
          </Route>

          {/* catch all */}
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
