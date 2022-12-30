import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Headercss = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  border-top: 3px solid var(--main-color);
  background-color: var(--background-color);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  > .logo {
    padding: 0 0.8rem;
    height: 100%;
    display: flex;
    align-items: center;
    > span {
      width: 15rem;
      height: 3rem;
      background-image: url(../images/logo-stackoverflow.svg);
      background-size: cover;
      background-position: center center;
      text-indent: -9999rem;
    }
  }

  .filter-container {
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
  .signup-button {
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    padding: 0.8em;
    cursor: pointer;
    display: inline-block;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
    margin-left: 0.3em;
    > .font {
      color: white;
      font-size: 13px;
      font-weight: normal;
      line-height: calc((13+2) / 13);
      font-weight: normal;
    }
  }
  .login-button {
    background-color: hsl(205, 46%, 92%);
    border: 1px solid transparent;
    border-color: hsl(205, 41%, 63%);
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    padding: 0.8em;
    cursor: pointer;
    display: inline-block;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
    margin-left: 0.8em;
  }
  .login-font {
    color: hsl(206, 100%, 40%);
  }
`;

const Header = () => {
  return (
    <Headercss>
      <Link to='/' className='logo'>
        <span>Stackoverflow</span>
      </Link>
      {/* <div>About</div>
           <div>Products</div>
           <div>For Teams</div> */}
      <form>
        <input
          type='text'
          placeholder='Search...'
          className='filter-container'
        />
      </form>
      <button className='login-button'>
        <Link to='/login' className='login-font'>
          Log in
        </Link>
      </button>
      {/* Login.js로 이동 */}
      <button className='signup-button'>
        <Link to='/signup' className='font'>
          Sign up
        </Link>
      </button>
      {/* Signup.js로 이동 */}
    </Headercss>
  );
};

export default Header;
