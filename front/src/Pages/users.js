import Sidebar from '../Components/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import axios from '../util/axios';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';
import User from '../Components/User';
import PageButton from '../Components/PageButton';

// 새로운 페이지에 아래 스타일 컴포넌트를 최상단에 깔아줘야함
const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  text-align: left;

  .users-page-container {
    border-left: 1px solid hsl(210, 8%, 85%);
    box-sizing: border-box;
    padding: 2.4rem;
  }

  h1 {
    font-size: 2.7rem;
    margin: 0px 0px 24px;
    line-height: 1.3;
    font-weight: 400;
  }

  .users-filter-container {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    position: relative;

    > * {
      width: 183px;
      height: 36.78px;
      -webkit-appearance: none;
      margin: 0;
      padding: 1px 2px 1px 32px;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      padding: 7.8px 9.1px 7.8px 32px;
      background-image: url(../images/glass.png);
      background-repeat: no-repeat;
      background-size: 18px;
      background-position: 8px center;
      color: hsl(210, 8%, 55%);
      /* 태그 필터 안에 이미지 위치를 정확히 파악하지 못하는 중 */
    }
  }

  .date-container {
    display: flex;
    justify-content: space-between;
    margin: 8px 0px 12px 0px;
    > div {
      box-sizing: border-box;
      float: right;
    }
  }
  /* 우측으로 몰아지지가 않음 */

  .users-list {
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: calc(1.2rem * 1) calc(1.2rem * 1);
  }

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

const Users = () => {
  const [page, setPage] = useState(1);

  const getAllUsers = async (pageParam = 1) => {
    const res = await axios.get(`/api/users?page=${pageParam}&size=16`, {
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
    data: allUsers,
    isFetching,
    isPreviousData,
  } = useQuery(['/api/users', page], () => getAllUsers(page), {
    keepPreviousData: true,
  });

  const prevPage = () => setPage((prev) => prev - 1);
  const nextPage = () => setPage((prev) => prev + 1);

  const pagesArray = Array(allUsers?.pageInfo?.totalPages)
    .fill()
    .map((_, index) => index + 1);

  const [query, setQuery] = useState('');

  console.log(allUsers?.data);
  return (
    <HomeWrap>
      <Sidebar />

      <div className='users-page-container'>
        <div className='users-mainbar'>
          <h1 className='users-headline'>Users</h1>

          <div className='users-filter-container'>
            <input
              type='text'
              placeholder='Filter by user'
              className='users-filter'
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <br />

          <div className='users-list'>
            {isLoading && <Loading />}
            {isFetching && <Loading />}
            {isError && <p>Error: {error.message}</p>}

            {query.length > 2
              ? allUsers?.data
                  ?.filter((user) =>
                    user.displayName.toLowerCase().includes(query)
                  )
                  .map((user) => <User key={user?.id} user={user} />)
              : allUsers?.data?.map((user) => (
                  <User key={user?.id} user={user} />
                ))}
          </div>

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
                isPreviousData || page === allUsers?.pageInfo?.totalPages
              }
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </HomeWrap>
  );
};

export default Users;
