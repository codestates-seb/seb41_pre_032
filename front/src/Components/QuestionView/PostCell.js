import { Link } from "react-router-dom";
import styled from "styled-components";

const PostLayout = styled.article`
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
        background-color: #dce9f6;
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

const Question = ({
  data,
  createdDate,
  upVote,
  downVote,
  handleDelete,
  handleUpVote,
  handleDownVote,
}) => {
  return (
    <PostLayout>
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
        <div className="vote-count">0</div>
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
      <div className="postcell">
        <div className="post-body">
          <div>{data.contents}</div>
          <div>{data.attempt}</div>
        </div>
        <div className="tags-wrap">
          <ul>
            {data.tags
              ? data.tags.map((tag, idx) => (
                  <li key={idx} className="tag">
                    {tag.tagName}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="etc-wrap">
          <div className="btn-wrap">
            <button>
              <Link to={`/question/modified/${data.id}`}>Modified</Link>
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
            <span>{`edited ${createdDate}`}</span>
          </div>
          <div className="user-info">
            <Link to="/" className="user-avatar">
              <img
                alt="UserAvatar"
                src={
                  data.user.profileUrl ? data.user.profileUrl : "../logo192.png"
                }
              />
            </Link>
            <div className="user-details">
              <Link to="/">{data.user.displayName}</Link>
              <div className="flair">
                <span className="circle" />
                <span className="bages"> {data.user.reputation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PostLayout>
  );
};

export default Question;
