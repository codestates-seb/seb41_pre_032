import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from '../util/axios';

const SignupInfoWrap = styled.div`
  width: 32rem;
  .input-box {
    margin-left: 0;
    margin-right: 0;
    margin: 4px * 1 / 2;
    position: relative;
    display: flex;
    box-sizing: inherit;
    padding-top: 0.5em;
    padding-right: 0.7em;
    padding-bottom: 0.6em;
    padding-left: 0.7em;
    margin-bottom: 1em;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    background-color: white;
  }

  .signup-button {
    background-color: hsl(206, 100%, 52%);
    color: white;
    border-radius: 3px;
    padding: 0.7em;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  .font-etc {
    color: hsl(210, 8%, 45%);
    font-size: 13px;
    vertical-align: baseline;
    text-align: left;
    margin-bottom: 0.4rem;
    margin-top: 0.4rem;
  }

  .sign-form-container {
    background-color: white;
    padding: 2.4rem;
    border-radius: 7px;
    margin-bottom: 2.4rem;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  }
  .googlelogin-button {
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
    font-size: 12px;
    gap: 3px;
    > .googlelogo {
      width: 18px;
      height: 18px;
      object-fit: cover;
    }
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

  .error {
    color: red;
    font-size: 13px;
    vertical-align: baseline;
    text-align: left;
    margin-bottom: 0.4rem;
    margin-top: 0.4rem;
  }

  .ps-container {
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    padding: 1.6rem;
    margin-bottom: 2.4rem;
    > a {
      color: #0074cc;
    }
  }
`;
const REGISTER_URL = '/api/users';

const SignupInfo = () => {
  const [errMsg, setErrMsg] = useState('');

  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      displayName: Yup.string().required('Display name cannot be empty'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email cannot be empty.'),

      password: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          'Passwords must contain at least eight characters, including at least 1 letter and 1 number.'
        )
        .required('Password cannot be empty.'),
    }),

    onSubmit: async (values) => {
      try {
        await axios.post(REGISTER_URL, JSON.stringify(values), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        if (!error.response) {
          console.log('no server response');
        } else setErrMsg(error.response.data.message);
      }
    },
  });

  return (
    <SignupInfoWrap>
      <div className='sns-container'>
        <a href='/oauth2/authorization/google' className='googlelogin-button'>
          <img
            alt='google logo'
            src='../images/googlebutton.png'
            className='googlelogo'
          />
          Sign up with Google
        </a>
      </div>
      <form className='sign-form-container' onSubmit={formik.handleSubmit}>
        <div className='input-container'>
          <label htmlFor='displayName'>Display name</label>
          <input
            type='text'
            id='displayName'
            name='displayName'
            onChange={formik.handleChange}
          />
          {formik.touched.displayName && formik.errors.displayName ? (
            <p className='error'>{formik.errors.displayName}</p>
          ) : null}
        </div>
        <div className='input-container'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className='error'>{formik.errors.email}</p>
          ) : null}
          <p className='error'>{errMsg}</p>
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
        <button type='submit' className='signup-button'>
          Sign up
        </button>
        <div className='hidden'>
          <label htmlFor='file-input'></label>
        </div>
        <div className='caption'>
          <p className='font-etc'>
            By clickigng "Sign up", you agree to our terms of service, privacy
            policy and cookie policy
          </p>
        </div>
      </form>
      <div className='ps-container'>
        <span>Already have an account? </span>
        <Link to='/login'>Log in</Link>
      </div>
    </SignupInfoWrap>
  );
};

export default SignupInfo;
