import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserWrap = styled.div`
  .user-container {
    font-size: 13px;
    padding: 5px 6px 7px 7px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .user-profile-photo {
    width: 48px;
    height: 48px;
    object-fit: cover;
    float: left;
  }

  .user-profile-detail {
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

  .user-reputation {
    font-size: 12px;
    margin: 0px 2px 0px 0px;
    color: #6a737c;
    font-weight: bold;
  }

  .user-tags {
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

const User = ({ user }) => {
  return (
    <UserWrap className='user-container'>
      <Link to={`${user.id}`}>
        <img
          src={user?.profileUrl}
          alt='avatar'
          className='user-profile-photo'
        />
      </Link>

      <div className='user-profile-detail'>
        <Link to={`${user.id}`} className='to-userinfo-link'>
          {user?.displayName}
        </Link>
        <span>{user?.location}</span>
        <span className='user-reputation'>{user?.reputation}</span>
      </div>

      <div className='user-tags'>
        <Link>docker </Link>,&nbsp;
        <Link>docker-compose </Link>,&nbsp;
        <Link>dockerfile </Link>
      </div>
    </UserWrap>
  );
};

export default User;
