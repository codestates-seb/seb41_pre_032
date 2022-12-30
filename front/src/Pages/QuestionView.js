import Sidebar from '../Components/Sidebar';
import styled from 'styled-components';
import useFetch from '../util/useFetch';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { fetchDelete } from '../util/api';
import { useState } from 'react';
import Footer from '../Components/Footer';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;
const Content = styled.section`
  width: 100%;
  border: 1px solid hsl(210, 8%, 85%);
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
  padding: 2.4rem;
  box-sizing: border-box;
  > .question-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    > h2 {
      font-size: 2.7rem;
      margin-bottom: 0.8rem;
      font-weight: normal;
    }
    > .button-ask-question {
      margin-left: 1.2rem;
      height: max-content;
    }
  }
  > .fw-wrap {
    display: flex;
    padding-bottom: 0.8rem;
    margin-bottom: 1.6rem;
    flex-wrap: wrap;
    border-bottom: 1px solid hsl(210, 8%, 90%);
    > .fw-item {
      margin: 0 1.6rem 0.8rem 0;
      font-size: 1.3rem;
      > span:first-child {
        color: #6a737c;
        margin-right: 0.4rem;
      }
    }
  }
  > .post-layout {
    display: flex;
    flex-direction: row;
    > .votecell {
      padding-right: 1.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      > button {
        border: 1px solid transparent;
        background-color: transparent;
        cursor: pointer;
      }
      > .vote-count {
        margin: 0.2rem;
        color: #6a737c;
        font-size: 2.1rem;
      }
    }
    > .postcell {
      width: 100%;
      > .post-body {
        width: 100%;
        > div:first-child {
          margin-bottom: 1rem;
        }
      }
      > .tags-wrap {
        margin: 2.4rem 0 1.2rem;
        > ul {
          display: flex;
          margin-bottom: 1.3rem;
          > li {
            margin: 0.2rem 0.6rem 0.2rem 0;
            padding: 0.5rem 0.6rem;
            background-color: #e1ecf4;
            color: #39739d;
            font-size: 1.2rem;
            border-radius: 3px;
          }
        }
      }
      > .etc-wrap {
        display: flex;
        flex-direction: row;
        padding-top: 0.4rem;
        margin: 1.6rem 0;
        flex-wrap: wrap;
        justify-content: flex-end;
        > .btn-wrap {
          margin: 0 auto 0 0;
          padding-top: 0.2rem;
          display: flex;
          align-items: flex-start;
          > button {
            margin: 0.4rem;
            font-size: 1.3rem;
            color: #6a737c;
            background-color: transparent;
            border: none;
          }
        }
        > .action-time {
          margin: 0.4rem 0;
          width: 20rem;
          padding: 0.5rem 0.6rem 0.7rem 0.7rem;
          > span {
            font-size: 1.2rem;
            color: #0073cc;
          }
        }
        > .user-info {
          margin: 0.4rem 0;
          width: 20rem;
          padding: 0.5rem 0.6rem 0.7rem 0.7rem;
          border-radius: 3px;
          background-color: #dce9f6;
          > .user-avatar {
            > img {
              width: 32px;
              height: 32px;
              max-width: 100%;
            }
          }
          > .user-details {
            > a {
            }
            > .fair {
              > .score {
              }
              > .bages {
              }
            }
          }
        }
      }
    }
  }
`;
const QuestionView = () => {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const { id } = useParams();
  const [data, isPending, error] = useFetch(
    `${process.env.REACT_APP_API_URL}/api/questions/${id}`
  );
  let createdDate;
  let updatedDate;
  if (data) {
    createdDate = `${data.createdDate.slice(0, 10)} ${data.createdDate.slice(
      -8
    )}`;
    updatedDate = `${data.updatedDate.slice(0, 10)} ${data.updatedDate.slice(
      -8
    )}`;
  }

  const handleDelete = () => {
    fetchDelete(`${process.env.REACT_APP_API_URL}/api/questions/`, id);
  };
  const handleUpVote = (e) => {
    upVote === 0 ? setUpVote(1) : setUpVote(0);
  };
  const handleDownVote = (e) => {
    downVote === 0 ? setDownVote(1) : setDownVote(0);
  };
  return (
    <HomeContainer>
      <ViewWrap>
        <Sidebar />
        <Content>
          {isPending && <Loading />}
          {error && <div>{error}</div>}
          {data && (
            <>
              <div className='question-header'>
                <h2>{data.title}</h2>
                <Link to='/question/create' className='button-ask-question'>
                  Ask Question
                </Link>
              </div>
              <div className='fw-wrap'>
                <div className='fw-item'>
                  <span>Asked</span>
                  <time>{createdDate}</time>
                </div>
                <div className='fw-item'>
                  <span>Modified</span>
                  <time>{updatedDate}</time>
                </div>
                <div className='fw-item'>
                  <span>Viewed</span>
                  <span>{`${0} times`}</span>
                </div>
              </div>
              <article className='post-layout'>
                <div className='votecell'>
                  <button
                    onClick={() => {
                      handleUpVote();
                    }}
                    className='vote-up-btn'
                    aria-label='Up vote'>
                    <img
                      alt='Up vote'
                      src={
                        upVote === 0
                          ? '../images/upVote.png'
                          : '../images/upVoteOrange.png'
                      }
                    />
                  </button>
                  <div className='vote-count'>0</div>
                  <button
                    onClick={() => {
                      handleDownVote();
                    }}
                    className='vote-up-btn'
                    aria-label='Up vote'>
                    <img
                      alt='Up vote'
                      src={
                        downVote === 0
                          ? '../images/downVote.png'
                          : '../images/downVoteOrange.png'
                      }
                    />
                  </button>
                </div>
                <div className='postcell'>
                  <div className='post-body'>
                    <div>{data.contents}</div>
                    <div>{data.attempt}</div>
                  </div>
                  <div className='tags-wrap'>
                    <ul>
                      {data.tags
                        ? data.tags.map((tag, idx) => (
                            <li key={idx} className='tag'>
                              {tag.tagName}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <div className='etc-wrap'>
                    <div className='btn-wrap'>
                      <button>Modified</button>
                      <button
                        onClick={() => {
                          handleDelete();
                        }}>
                        Delete
                      </button>
                    </div>
                    <div className='action-time'>
                      <span>{`edited ${createdDate}`}</span>
                    </div>
                    <div className='user-info'>
                      <Link to='/' className='user-avatar'>
                        <img
                          alt='UserAvatar'
                          src={
                            data.user.profileUrl
                              ? data.user.profileUrl
                              : '../logo192.png'
                          }
                        />
                      </Link>
                      <div className='user-details'>
                        <Link to='/'>{data.user.displayName}</Link>
                        <div className='flair'>
                          <span className='bages'>
                            <span className='circle' /> {data.user.reputation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className='answers-layout'>
                <h2 className='answers-notice'>
                  Know someone who can answer? Share a link to this question via
                  email, Twitter, or Facebook.
                </h2>
              </article>
            </>
          )}
        </Content>
      </ViewWrap>
      <Footer />
    </HomeContainer>
  );
};

export default QuestionView;
