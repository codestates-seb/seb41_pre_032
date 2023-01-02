import styled from 'styled-components';
import TimeAgo from 'timeago-react';

const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  max-width: 800px;

  .post-title {
    padding-right: 12px;
    margin: 0px 6px;
    font-size: 15px;
    color: #0074cc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .post-date {
    margin-right: 6px;
    font-size: 13px;
    color: #6a737c;
  }
`;

const Post = ({ qa }) => {
  return (
    <PostWrap className='post'>
      <p className='post-title'>
        {qa.title ? `q. ${qa.title}` : `a. ${qa.contents}`}
      </p>
      <TimeAgo className='post-date' datetime={qa.updatedDate} />
    </PostWrap>
  );
};

export default Post;
