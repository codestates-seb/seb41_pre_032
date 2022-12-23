import styled from "styled-components";
import { Link } from "react-router-dom";

const QuestionWrap = styled.li`
  margin:0 -2.4rem;
  .question-container {
    display: flex;
    background-color: white;
    position: relative;
    border: 0;
    border-top: 1px solid hsl(210, 8%, 90%);
    border-bottom: 1px solid hsl(210, 8%, 90%);
    padding: calc(16px * 1);
    box-sizing: inherit;
    margin: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  .left {
    gap: calc(6px * 1);
    margin-right: calc(16px * 1);
    margin-bottom: calc(4px * 1);
    width: calc(calc(96px * 1) + calc(12px * 1));
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: flex-end;
    color: hsl(210, 8%, 45%);
    font-size: 1.3rem;
  }
  .right {
    flex-grow: 1;
    max-width: 100%;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    display: flex;
    flex-direction: column;
  }
  .question-title {
    >a{
      font-weight: 400;
      display: block;
      font-size: 1.7rem;
      margin-top: -0.15rem;
      margin-bottom: 0.3846rem;
      padding-right: calc(24px * 1);
      line-height: calc((13+4) / 13);
      font-weight: normal;
      hyphens: auto;
      word-break: break-all;
      color: hsl(206, 100%, 40%);
    }
  }

  .question-content {
    margin-top: calc(2px * 1);
    margin-bottom: calc(8px * 1);
    color: hsl(210, 8%, 25%);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    overflow-wrap: break-word;
    font-size: 1.3rem;
  }

  .content-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: calc(6px * 1);
    row-gap: calc(8px * 1);
  }
  .tag-list {
    display: inline;
    list-style: none;
    margin: 0 0 1.3rem 0;
    padding: 0;

  }

  .tag {
    font-size: 12px;
    background-color: hsl(205, 46%, 92%);
    border-color: transparent;
    color: hsl(205, 47%, 42%);
    display: inline-block;
    padding: 0.4em;
    margin-right: 8px;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    cursor: pointer;
  }
  .userWrap {
    display:flex;
  }
  .usercard-photo {
    flex-wrap: wrap;
    margin-left: auto;
    justify-content: flex-end;
  }
  .useravatar {
    background-color: white;
    border-radius: 3px;
    height: 16px;
    width: 16px;
    display: inline-block;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100%;
    vertical-align: bottom;
  }

  .usercard-name {
    align-items: center;
    flex-direction: row;
    display: flex;
    margin: 0 .4rem;
    font-size: 1.2rem;
  }

  .username {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    margin: calc(4px * 1) / 2;
  }

  .usercard-date {
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    display: flex;
    gap: calc(6px * 1);
  }

  .date {
    color: hsl(210, 8%, 45%);
    white-space: nowrap;
    font-size: 12px;
    box-sizing: inherit;
  }

  .votesWrap {
    color: #0c0d0e;
  }
`;

const Question = ({ data }) => {
  return (
    <QuestionWrap>
      <div className="question-container">
        <div className="left">
          <div className="votesWrap">
            <span>0</span>
            <span>votes</span>
          </div>
          <div className="answersWrap">
            <span>0</span>
            <span>answers</span>
          </div>
          <div className="viewsWrap">
            <span>0</span>
            <span>views</span>
          </div>
        </div>
        <div className="right">
          <h3 className="question-title">
            <Link to={`/question/${data.id}`}>{data.title}</Link>
          </h3>
          <div className="question-content">{data.contents}</div>

          <div className="content-meta">
            <ul className="tag-list">
              {data.tags
                ? data.tags.map((tag) => (
                    <li key={tag.tagId} className="tag">
                      {tag.tagName}
                    </li>
                  ))
                : null}
            </ul>
            <div className="userWrap">
              <div className="usercard-photo">
                <a href="/">
                  <img alt="" src="../logo192.png" className="useravatar" />
                  {/* 프로필사진 예시 */}
                </a>
              </div>
              <div className="usercard-name">
                <a href="/" className="username">
                  Name
                </a>
              </div>
              <div className="usercard-date">
                <p href="/" className="date">
                  날짜
                </p>
              </div>
            </div>
          </div>
          {/* 제목/태그/글쓴이사진/ 글쓴이이름/날짜/조회수*/}
        </div>
      </div>
    </QuestionWrap>
  );
};

export default Question;
