import Sidebar from '../Components/Sidebar';
import styled from 'styled-components';
import PageListButton from '../Components/PageListButton';
import { Link } from 'react-router-dom';
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
    margin-top: 32px;
    padding: 0;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: calc(1.2rem * 1) calc(1.2rem * 1);
  }

  .eachuser-container {
    font-size: 13px;
    padding: 5px 6px 7px 7px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .eachuser-profile-photo {
    width: 48px;
    height: 48px;
    object-fit: cover;
    float: left;
  }

  .eachuser-profile-detail {
    margin: 0px 0px 0px 9px;
    float: left;

    > a {
      font-size: 15px;
      color: #0074cc;
      cursor: pointer;
    }

    > span {
      font-size: 12px;
      display: block;
      margin: 0px 0px 2px;
      color: hsl(210, 8%, 45%);
    }
  }

  .eachuser-reputation {
    font-size: 12px;
    margin: 0px 2px 0px 0px;
    color: #6a737c;
    font-weight: bold;
  }

  .eachuser-uselanguage {
    margin: 0px 0px 0px 57px;
    clear: both;
    box-sizing: inherit;
    display: block;
    font-size: 12px;
    > a {
      color: #0074cc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }
`;
const Users = () => {
  return (
    <HomeContainer>
      <HomeWrap>
        <Sidebar />
        <div className='users-page-container'>
          <div className='users-mainbar'>
            <h1 className='users-headline'>Users</h1>
            <div className='users-filter-container'>
              <input
                type='text'
                placeholder='Filter by tag users'
                className='users-filter'
              />
            </div>
            <div className='users-list'>
              <div className='eachuser-container'>
                <div>
                  <img
                    src='../images/578b036954e5dbaa.jpeg'
                    alt='avatar'
                    className='eachuser-profile-photo'></img>
                </div>
                <div className='eachuser-profile-detail'>
                  <Link to='/userinfo'>
                    <div className='to-userinfo-link'>BMitch</div>
                  </Link>
                  <span>Virgina</span>
                  <div className='eachuser-reputation'>8368</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>docker </a>,&nbsp;
                  <a href='/login'>docker-compose </a>,&nbsp;
                  <a href='/login'>dockerfile </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
              <div className='eachuser-container'>
                <img
                  src='../images/question.png'
                  alt='avatar'
                  className='eachuser-profile-photo'></img>
                <div className='eachuser-profile-detail'>
                  <a href='/login'>mozway</a>
                  <span>Slovakia</span>
                  <div className='eachuser-reputation'>6123</div>
                </div>
                <div className='eachuser-uselanguage'>
                  <a href='/login'>python </a>,&nbsp;
                  <a href='/login'>pandas </a>,&nbsp;
                  <a href='/login'>dateframe </a>
                </div>
              </div>
            </div>
            <PageListButton />
          </div>
        </div>
      </HomeWrap>
      <Footer />
    </HomeContainer>
  );
};

export default Users;
