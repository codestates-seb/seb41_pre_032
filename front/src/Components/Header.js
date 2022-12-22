import { Link } from "react-router-dom";
import styled from "styled-components";
// import Logo from '../images/logo-stackoverflow.png'

// function GoHomeImage() {
//     return(
//         <Link to = '/app.js'>
//             <img className='Logo' src ='seb41_pre_032/front/src/Images/logo-stackoverflow.svg' />
//         </Link>
//     )
// }

// 배너를 로그인 홈 링크로 걸어보려다 보류

const Headercss = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid var(--main-color);
  background-color: var(--background-color);
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
      <Link to="/" className="logo">
        <span>Stackoverflow</span>
      </Link>
      {/* <div>About</div>
           <div>Products</div>
           <div>For Teams</div> */}
      <form>
        <input type="text" placeholder="Search..." />
      </form>
      <button className="login-button">
        <Link to="/login" className="login-font">
          Log in
        </Link>
      </button>
      {/* Login.js로 이동 */}
      <button className="signup-button">
        <Link to="/signup" className="font">
          Sign up
        </Link>
      </button>
      {/* Signup.js로 이동 */}
    </Headercss>
  );
};

export default Header;
