import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import QuestionList from '../Components/QuestionList';
import { useState } from 'react';
import { useQuery } from 'react-query';
import PageButton from '../Components/PageButton';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../util/useAuth';
import useAxios from '../util/useAxios';

const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: left;

  .btns {
    text-align: right;
    margin-top: 15px;
  }

  .btn {
    margin-left: 4px;
    background-color: transparent;
    border-style: solid;
    border-color: hsl(210, 8%, 85%);
    border-width: 1px;
    border-radius: 3px;
    color: hsl(210, 8%, 25%);
    padding: 3px 6px;
  }

  .btn:hover {
    cursor: pointer;
    background-color: hsl(210, 8%, 85%);
    border-color: hsl(210, 8%, 75%);
    color: hsl(210, 8%, 5%);
  }

  .btn:disabled,
  .btn[disabled] {
    display: none;
  }
`;

const AllQuestions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState(1);
  const axiosPrivate = useAxios();
  const { auth } = useAuth();

  const getAllQuestions = async (pageParam = 1) => {
    try {
      const res = await axiosPrivate.get(
        `/api/questions?page=${pageParam}&size=15`,
        {
          headers: {
            Authorization: auth?.accessToken,
            Refresh: auth?.refreshToken,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.log(error.response.data);

      navigate('/login', { state: { from: location }, replace: true });
    }
  };

  const {
    isLoading,
    isError,
    error,
    data: allQuestions,
    isFetching,
    isPreviousData,
  } = useQuery(['/api/questions', page], () => getAllQuestions(page), {
    keepPreviousData: true,
  });

  const prevPage = () => setPage((prev) => prev - 1);
  const nextPage = () => setPage((prev) => prev + 1);

  const pagesArray = Array(allQuestions?.pageInfo?.totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <BodyWrap>
      <HomeWrap>
        <Sidebar />
        <QuestionList title='All Questions' data={allQuestions}>
          {isLoading && <Loading />}
          {isFetching && <Loading />}
          {isError && <p>Error: {error.message}</p>}
          <nav className='btns'>
            <button
              className='btn prevBtn'
              onClick={prevPage}
              disabled={isPreviousData || page === 1}
            >
              Prev
            </button>
            {pagesArray.map((pg) => (
              <PageButton key={pg} pg={pg} setPage={setPage} />
            ))}
            <button
              className='btn nextBtn'
              onClick={nextPage}
              disabled={
                isPreviousData || page === allQuestions?.pageInfo?.totalPages
              }
            >
              Next
            </button>
          </nav>
        </QuestionList>
      </HomeWrap>
      <Footer />
    </BodyWrap>
  );
};

export default AllQuestions;
