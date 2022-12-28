import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import QuestionList from '../Components/QuestionList';
import { useState } from 'react';
import axios from '../util/axios';
import { useQuery } from 'react-query';
import PageButton from '../Components/PageButton';
import Loading from '../Components/Loading';

const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const AllQuestions = () => {
  const [page, setPage] = useState(1);

  const getAllQuestions = async (pageParam = 1) => {
    const res = await axios.get(`/api/questions?page=${pageParam}&size=15`, {
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        Refresh: process.env.REACT_APP_REFRESH,
      },
    });

    return res.data;
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
    <HomeWrap>
      <Sidebar />
      <QuestionList title='All Questions' data={allQuestions}>
        {isLoading && <Loading />}
        {isFetching && <Loading />}
        {isError && <p>Error: {error.message}</p>}
        <nav>
          <button onClick={prevPage} disabled={isPreviousData || page === 1}>
            Prev
          </button>
          {pagesArray.map((pg) => (
            <PageButton key={pg} pg={pg} setPage={setPage} />
          ))}
          <button
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
  );
};

export default AllQuestions;
