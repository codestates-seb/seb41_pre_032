import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchDelete } from "../../util/api";
import useAuth from '../../util/useAuth';

const AnswerLayout = styled.article`
  display: flex;
  flex-direction: row;
  padding: 1.6rem 0;
  border-bottom: 1px solid #e3e6e8;
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
  > .answercell {
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
          cursor: pointer;
          > a {
            color: #6a737c;
          }
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
        /* background-color: #dce9f6; */
        display: flex;
        > .user-avatar {
          > img {
            width: 32px;
            height: 32px;
            max-width: 100%;
          }
        }
        > .user-details {
          margin-left: 8px;
          > a {
            font-size: 1.3rem;
            color: #0a95ff;
          }
          > .flair {
            display: flex;
            align-items: center;
            > .circle {
              display: inline-block;
              width: 6px;
              height: 6px;
              margin: 0 0.3rem;
              background-color: #f7ce46;
              border-radius: 50%;
            }
            > .bages {
              font-size: 1.2rem;
              color: #838c95;
            }
          }
        }
      }
    }
  }
`;

const Answer = ({ answer }) => {
  const { auth } = useAuth();
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const handleUpVote = (e) => {
    upVote === 0 ? setUpVote(1) : setUpVote(0);
  };
  const handleDownVote = (e) => {
    downVote === 0 ? setDownVote(1) : setDownVote(0);
  };
  const handleDelete = () => {
    fetchDelete(`${process.env.REACT_APP_API_URL}/api/answers/`, answer.id, auth.accessToken, auth.refreshToken);
  };

  let updatedDate;
  if (answer) {
    updatedDate = `${answer.updatedDate.slice(0, 10)} ${answer.updatedDate.slice(
      -8
    )}`;
  }
  return (
    <AnswerLayout>
      <div className="votecell">
        <button
          onClick={() => {
            handleUpVote();
          }}
          className="vote-up-btn"
          aria-label="Up vote"
        >
          <img
            alt="Up vote"
            src={
              upVote === 0
                ? "../images/upVote.png"
                : "../images/upVoteOrange.png"
            }
          />
        </button>
        <div className="vote-count">{answer.likeCount}</div>
        <button
          onClick={() => {
            handleDownVote();
          }}
          className="vote-up-btn"
          aria-label="Up vote"
        >
          <img
            alt="Up vote"
            src={
              downVote === 0
                ? "../images/downVote.png"
                : "../images/downVoteOrange.png"
            }
          />
        </button>
      </div>
      <div className="answercell">
        <div className="answer-body">
          <div>{answer.contents}</div>
        </div>
        <div className="etc-wrap">
          <div className="btn-wrap">
            <button>
              <Link to={`/answer/modified/${answer.id}`}>Modified</Link>
            </button>
            <button
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </button>
          </div>
          <div className="action-time">
            <span>{`answered ${updatedDate}`}</span>
          </div>
          <div className="user-info">
            <Link to="/" className="user-avatar">
              <img
                alt="UserAvatar"
                src={
                  answer.user.profileUrl
                    ? answer.user.profileUrl
                    : "../logo192.png"
                }
              />
            </Link>
            <div className="user-details">
              <Link to="/">{answer.user.displayName}</Link>
              <div className="flair">
                <span className="circle" />
                <span className="bages"> {answer.user.reputation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnswerLayout>
  );
};
export default Answer;
