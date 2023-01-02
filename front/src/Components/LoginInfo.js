import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../util/useAuth';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from '../util/axios';

const Logininfowrap = styled.div`
  .login-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .google_buttonimage {
    vertical-align: baseline;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    width: 18px;
    height: 18px;
  }

  .form-wrap {
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    padding: 2.4rem;
    margin-bottom: 2.4rem;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: 7px;
    box-sizing: inherit;
    width: 300px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
    margin: calc(12px * 1) / 2 * -1;
    box-sizing: inherit;
  }
  .input-container {
    margin: 0.6rem;
    margin-right: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    box-sizing: inherit;

    > label {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 0 0.2rem;
      margin: 0.2rem 0;
    }
    > input {
      width: 100%;
      margin: 0;
      padding: 0.7rem 0.6rem;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      color: hsl(210, 8%, 5%);
      font-size: 1.3rem;
    }
  }

  .email-label {
    margin-left: 0;
    margin-right: 0;
    cursor: pointer;
    font-weight: 500;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .login-button {
    margin: 0.6rem 0;
    background-color: hsl(206, 100%, 52%);
    color: white;
    border-radius: 3px;
    padding: 0.7em;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  .googleLogin-button {
    cursor: pointer;
    background-color: white;
    margin-left: 0;
    margin-right: 0;
    margin: 4px * 1 / 2;
    position: relative;
    display: flex;
    box-sizing: inherit;
    padding: 0.6em;
    margin-bottom: 1em;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    background-color: white;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-size: 12px;
  }

  .googleLogo {
    width: 18px;
    height: 18px;
    object-fit: cover;
  }

  .error {
    color: red;
    font-size: 13px;
    vertical-align: baseline;
    text-align: left;
    margin-bottom: 0.4rem;
    margin-top: 0.4rem;
  }
`;

const LOGIN_URL = '/api/login';

const LoginInfo = () => {
  const loginWithGoogle = () => {
    try {
      const res = axiosInstance.get('/oauth2/authorization/google');

      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const { setAuth, setUser, setLoggedin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().required('Email cannot be empty.'),

      password: Yup.string().required('Password cannot be empty.'),
    }),

    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.post(
          LOGIN_URL,
          JSON.stringify(values),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        const authTokens = {
          accessToken: res.headers.authorization,
          refreshToken: res.headers.refresh,
        };

        setAuth(authTokens);
        setUser(jwtDecode(authTokens?.accessToken));
        setLoggedin(true)
        
        localStorage.setItem('auth', JSON.stringify(authTokens));

        navigate('/', { state: from, replace: true });
      } catch (error) {
        console.log(error.response.data);
      }
    },
  });

  return (
    <Logininfowrap>
      <button className='googleLogin-button' onClick={loginWithGoogle}>
        <img
          alt='google logo'
          src='../images/googlebutton.png'
          className='googleLogo'
        />
        Log in with Google
      </button>

      <div className='form-wrap'>
        <form className='form-container' onSubmit={formik.handleSubmit}>
          <div className='input-container'>
            <label htmlFor='email' className='email-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='error'>{formik.errors.email}</p>
            ) : null}
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className='font-etc error'>{formik.errors.password}</p>
            ) : null}
          </div>
          <button type='submit' className='login-button'>
            Log in
          </button>
        </form>
      </div>
    </Logininfowrap>
  );
};

export default LoginInfo;
