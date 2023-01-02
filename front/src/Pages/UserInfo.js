import Sidebar from '../Components/Sidebar';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from '../Components/Post';
import useAxios from '../util/useAxios';
import useAuth from '../util/useAuth';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  text-align: left;

  .userinfo-container {
    padding: 24px;
    border-left: 1px solid hsl(210, 8%, 85%);
  }

  .top-relative {
    margin-bottom: 16px;
    position: relative;
  }
  .top-container {
    display: flex;
    margin: -8px;
    align-items: center;
    flex-wrap: wrap;
  }

  .top-avatar {
    height: 128px;
    width: 128px;
    margin: 8px;
  }

  .top-info {
    margin: 8px;
  }

  .top-idbox {
    margin: -4px;
  }

  .top-id {
    margin: 4px 4px 12px 4px;
    line-height: 1;
    font-size: 34px;
  }

  .member-logrecord-box {
    display: flex;
    align-items: center;
    margin-left: -4px;
    > li {
      margin: 4px;
    }
  }

  .logrecord {
    display: flex;
    margin: 0px -2px;
    > div {
      margin: 0px 2px;
      font-size: 13px;
      color: #6a737c;
    }
  }
  .birthicon {
    height: 18px;
    width: 18px;
    margin: 0px 2px;
  }
  .log-data {
    margin: 0px 2px;
  }

  .absolute-container {
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    flex-wrap: wrap;
    margin: -3px;
    padding-bottom: 108.969px;
  }

  .absolute-button {
    padding: 9.6px 24px 9.6px 9.6px;
    font-size: 12px;
    color: #6a737c;
    margin: 3px;
    border: 1px solid #6a737c;
    background-color: white;
    border-radius: 3px;
    cursor: pointer;
  }

  .setting-container {
    margin-bottom: 16px;
    * {
      display: flex;
      align-items: center;
    }
    > .setting-box {
      padding: 2px 0px;
    }
  }

  .setting-click {
    padding: 6px 12px;
    background-color: #f48225;
    font-size: 13px;
    color: white;
    border-radius: 1000px;
    border: none;
    cursor: pointer;
  }

  .setting-non {
    padding: 6px 12px;
    font-size: 13px;
    color: #525960;
    border-radius: 1000px;
    border: none;
    cursor: pointer;
  }

  .main-content-container {
  }

  .main-content {
    display: flex;
    justify-content: flex-start;
    padding: -12px;
  }

  .left-content-container {
    margin: 12px;
    flex-basis: calc(25% - 24px);
  }

  .left-content {
    display: grid;
    width: 234.75px;
  }

  .stats-title {
    font-size: 21px;
    margin: 0px 0px 8px;
  }

  .stats-content-container {
    padding: 12px;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 5px;

    .stats-content-box {
      margin: -8px;
      display: grid;
      grid-template-columns: 100px 2fr;
    }
  }

  .stats-content {
    margin: 8px;
    > p {
      font-size: 13px;
      color: #6a737c;
    }
  }

  .stats-content-data {
    font-size: 17px;
  }

  .right-content-container {
    margin: 12px;
  }

  .about-title {
    font-size: 21px;
    margin: 0px 0px 8px;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .about-container {
    padding-bottom: 24px;
  }

  .posts-list {
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
  }
`;

const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { auth } = useAuth();
  const axiosPrivate = useAxios();

  useEffect(() => {
    const getUser = async () => {
      const res = await axiosPrivate.get(`/api/users/${id}`, {
        headers: {
          Authorization: auth?.accessToken,
          Refresh: auth?.refreshToken,
        },
      });

      try {
        setUser(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getUser();
  }, [id, auth, axiosPrivate]);

  const a = user?.answers;
  const q = user?.questions;

  const qas = q?.concat(a);

  return (
    <BodyWrap>
      <HomeWrap>
        <Sidebar />
        <div className='userinfo-container'>
          <div className='mainbar_full'>
            <div className='top-relative'>
              <div className='top-container'>
                <img
                  src={`${user?.profileUrl}`}
                  alt='avatar'
                  className='top-avatar'
                />
                <div className='top-info'>
                  <div className='top-idbox'>
                    <h1 className='top-id'>{user?.displayName}</h1>
                  </div>
                </div>
              </div>
              <div className='absolute-container'></div>
            </div>
          </div>
          <div className='setting-container'>
            <ul className='setting-box'>
              <Link to={`/users/${user?.id}`}>
                <li className='setting-click'>Profile</li>
              </Link>{' '}
              <Link to={`/users/edit/${user?.id}`}>
                <li className='setting-non'>Settings</li>
              </Link>
            </ul>
          </div>
          <div className='main-content-container'>
            <div className='main-content'>
              <div className='left-content-container'>
                <div className='left-content'>
                  <div className='stats-box'>
                    <h3 className='stats-title'>Stats</h3>
                    <div className='stats-content-container'>
                      <div className='stats-content-box'>
                        <div className='stats-content'>
                          <div className='stats-content-data'>
                            {user?.reputation}
                          </div>
                          reputation
                        </div>
                        <div className='stats-content'>
                          <div className='stats-content-data'>2.6m</div>
                          reached
                        </div>
                        <div className='stats-content'>
                          <div className='stats-content-data'>
                            {user?.answers?.length}
                          </div>
                          answers
                        </div>
                        <div className='stats-content'>
                          <div className='stats-content-data'>
                            {user?.questions?.length}
                          </div>
                          questions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right-content-container'>
                <div className='about-container'>
                  <h3 className='about-title'>About</h3>
                  <div className='about-content'>
                    <span>email: {user?.email}</span>
                    <span>location: {user?.location}</span>
                  </div>
                </div>
                <div className='posts-container'>
                  <h3 className='about-title'>Newest posts</h3>
                  <div className='posts-list'>
                    {qas
                      ?.sort(
                        (a, b) =>
                          new Date(b.updatedDate).getTime() -
                          new Date(a.updatedDate).getTime()
                      )
                      .map((qa, idx) => (
                        <Post key={idx} qa={qa} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeWrap>
      <Footer />
    </BodyWrap>
  );
};

export default UserInfo;
