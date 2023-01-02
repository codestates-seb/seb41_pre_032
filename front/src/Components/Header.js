import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../util/useAuth';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import useAxios from '../util/useAxios';

const Headercss = styled.div`
  position: sticky;
  top: 0;
  height: 5rem;
  z-index: 999;
  border-top: 3px solid var(--main-color);
  background-color: var(--background-color);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  .container {
    height: 100%;
    max-width: 1264px;
    margin: auto;
    display: flex;
    align-items: center;
  }

  input {
    flex-grow: 1;
    padding: 6px;
    outline: none;
  }

  .logout-ol {
    width: 250px;
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .login-ol {
    margin: 0 10px;
  }

  .link {
    font-size: 12px;
    color: hsl(210, 8%, 35%);
    padding: calc(6px * 1) calc(12px * 1);
    border-radius: 9999px;
  }

  .link:hover {
    background-color: hsl(210, 8%, 90%);
  }

  .logo {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .logo:hover {
    background-color: hsl(210, 8%, 90%);
  }

  img {
    background-size: cover;
    width: 150px;
  }

  .signup-button {
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    padding: calc(8px * 1) 0.8em;
    cursor: pointer;
    display: inline-block;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
    margin-left: 0.3em;
  }

  .font {
    color: white;
    font-size: 13px;
    font-weight: normal;
    line-height: calc((13+2) / 13);
    font-weight: normal;
  }

  .login-button:hover {
    background-color: hsl(205, 57%, 81%);
    color: hsl(205, 46%, 32%);
  }

  .signup-button:hover {
    background-color: hsl(206, 100%, 40%);
  }

  .login-button {
    background-color: hsl(205, 46%, 92%);
    border: 1px solid transparent;
    border-color: hsl(205, 41%, 63%);
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    padding: calc(8px * 1) 0.8em;
    cursor: pointer;
    display: inline-block;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
    margin-left: 0.8em;
  }

  .login-font {
    font-size: 13px;
    font-weight: normal;
    color: hsl(206, 100%, 40%);
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth, loggedin, setLoggedin, user, setUser } = useAuth();
  const axiosPrivate = useAxios();

  const logout = async () => {
    try {
      await axiosPrivate.get('/auth/logout', {
        headers: {
          Authorization: auth?.accessToken,
        },
      });

      setAuth(null);
      setUser(null);
      setLoggedin(false);

      localStorage.removeItem('auth');

      navigate('/login');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (user) {
      const expired = Date.now() >= jwtDecode(auth?.refreshToken).exp * 1000;

      if (expired) {
        setLoggedin(false);
      }
    }
  }, [user, auth, setLoggedin]);

  return (
    <Headercss>
      <div className='container'>
        <Link to='/' className='logo'>
          <img src='../images/logo-stackoverflow.svg' alt='logo' />
        </Link>

        <ol className={`${!loggedin ? 'logout-ol' : 'login-ol'}`}>
          {!loggedin && (
            <li>
              <Link className='link'>About</Link>
            </li>
          )}
          <li>
            {' '}
            <Link className='link'>Products</Link>
          </li>
          {!loggedin && (
            <li>
              {' '}
              <Link className='link'>For Teams</Link>
            </li>
          )}
        </ol>

        <input type='text' placeholder='Search...' />
        {loggedin ? (
          <div>
            <Link></Link>
            <button className='login-font login-button' onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <>
            <Link to='/login' className='login-font login-button'>
              Log in
            </Link>

            <Link to='/signup' className='font signup-button'>
              Sign up
            </Link>
          </>
        )}
      </div>
    </Headercss>
  );
};

export default Header;
