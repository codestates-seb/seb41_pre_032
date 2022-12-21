

const SignupInfo = () => {
  return (
    <div className="">
      <div className="">
        <form className="">
          <div className="">
            <div className="font-bold">Display name</div>
            <input type="text">
            </input>
          </div>
          <div className="">
            <div className="font-bold">Email</div>
            <input type="Email">
            </input>
          </div>
          <div className="">
            <div className="font-bold">Password</div>
            <input
              type="password">
            </input>
            <p className="">
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </p>
          </div>
          <button
            type="submit"
            className="justify-center w-full mt-10 so-button-primary"
          >
            Sign up
          </button>
          <div className="hidden">
            <label htmlFor="file-input">
            </label>
          </div>
        </form>
      </div>
      <div className="">
        <p className="">Already have an account?</p>
        <a href="./login" className=""> Log in </a>
      </div>
    </div>
  );
};

export default SignupInfo;
