import Sidebar from '../Components/Sidebar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  text-align: left;

  .userinfo-container {
    padding: 24px;
    border-left: 1px solid hsl(210, 8%, 85%);
  }

  .top-relative {
    margin-bottom: 16px;
    position: relative;
  }
  .top-container {
    display: flex;
    margin: -8px;
    align-items: center;
    flex-wrap: wrap;
  }

  .top-avatar {
    height: 128px;
    width: 128px;
    margin: 8px;
  }

  .top-info {
    margin: 8px;
  }

  .top-idbox {
    margin: -4px;
  }

  .top-id {
    margin: 4px 4px 12px 4px;
    line-height: 1;
    font-size: 34px;
  }

  .member-logrecord-box {
    display: flex;
    align-items: center;
    margin-left: -4px;
    > li {
      margin: 4px;
    }
  }

  .logrecord {
    display: flex;
    margin: 0px -2px;
    > div {
      margin: 0px 2px;
      font-size: 13px;
      color: #6a737c;
    }
  }
  .birthicon {
    height: 18px;
    width: 18px;
    margin: 0px 2px;
  }
  .log-data {
    margin: 0px 2px;
  }

  .absolute-container {
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    flex-wrap: wrap;
    margin: -3px;
    padding-bottom: 108.969px;
  }

  .absolute-button {
    padding: 9.6px 24px 9.6px 9.6px;
    font-size: 12px;
    color: #6a737c;
    margin: 3px;
    border: 1px solid #6a737c;
    background-color: white;
    border-radius: 3px;
    cursor: pointer;
  }

  .setting-container {
    margin-bottom: 16px;
    * {
      display: flex;
      align-items: center;
    }
    > .setting-box {
      padding: 2px 0px;
    }
  }

  .setting-click {
    padding: 6px 12px;
    background-color: #f48225;
    font-size: 13px;
    color: white;
    border-radius: 1000px;
    border: none;
    cursor: pointer;
  }

  .setting-non {
    padding: 6px 12px;
    font-size: 13px;
    color: #525960;
    border-radius: 1000px;
    border: none;
    cursor: pointer;
  }

  .main-content-container {
    /* justify-content: space-between; */
  }

  .main-content {
    display: flex;
    justify-content: flex-start;
    padding: -12px;
  }

  .left-content-container {
    margin: 12px;
    flex-basis: calc(25% - 24px);
  }

  .left-content {
    display: grid;
  }

  .stats-title {
    font-size: 21px;
    margin: 0px 0px 8px;
  }

  .stats-content-container {
    padding: 12px;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 5px;

    .stats-content-box {
      margin: -8px;
      display: grid;
      grid-template-columns: 100px 2fr;
    }
  }

  .stats-content {
    margin: 8px;
  }

  .stats-content-data {
    font-size: 17px;
  }

  .right-content-container {
    margin: 12px;
  }

  .about-title {
    font-size: 21px;
    margin: 0px 0px 8px;
  }

  .about-container {
    padding-bottom: 24px;
  }

  .posts-lists {
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    > .each-post {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      border-bottom: 1px solid hsl(210, 8%, 85%);
    }
    > .each-post-last {
      display: flex;
      justify-content: space-between;
      padding: 12px;
    }
  }

  .each-post-title {
    padding-right: 12px;
    margin: 0px 6px;
    font-size: 15px;
    color: #0074cc;
  }

  .each-post-date {
    margin-right: 6px;
    font-size: 13px;
    color: #6a737c;
  }

  .editbar-container {
    margin-bottom: 48px;
    display: flex;
  }

  .editbar-sidebar-container {
    margin-right: 32px;
  }

  .editbar-sidebar-title {
    padding: 6px 12px;
    color: #232629;
    font-size: 11px;
    font-weight: bold;
  }

  .editbar-sidebar-content {
    padding: 6px 12px;
    font-size: 13px;
  }

  .editprofile-title-container {
    padding-bottom: 16px;
    border-bottom: 1px solid hsl(210, 8%, 85%);
    margin-bottom: 24px;
    > h1 {
      font-size: 27px;
      font-weight: normal;
    }
  }

  .public-information {
    margin-bottom: 8px;
    font-size: 21px;
  }

  .edit-info-container {
    padding: 24px;
    border: 1px solid hsl(210, 8%, 90%);
    margin-bottom: 48px;
    border-radius: 5px;
  }

  .edit-info-box {
    padding: -2px 0px;
    display: flex;
    flex-direction: column;
  }

  .profile-image-box {
    margin-bottom: 6px;
  }

  .profile-image-title {
    margin: 2px 0px;
    font-size: 15px;
    font-weight: 600;
  }

  .profile-img-file {
    height: 164px;
    width: 164px;
  }

  .image-wrapper {
    position: relative;
  }

  .image-toggle {
    position: absolute;
    bottom: 1px;
    padding: 8px 0px;
    left: 0;
    right: 0;
    color: white;
    background-color: hsl(210, 8%, 35%);
    font-size: 13px;
    text-align: center;
    border-radius: 0px 0px 3px 3px;
    cursor: pointer;
    width: 164px;
  }

  .edit-input-container {
    margin: 6px 0px;
    display: flex;
    flex-direction: column;
  }

  .edit-input-title {
    font-size: 15px;
    padding: 0px 2px;
    font-weight: 600;
    cursor: pointer;
  }

  .edit-input {
    margin: 5px 0px;
    padding: 0.6em 0.7em;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    width: 421px;
  }

  .textarea-intro {
    padding: 10px;
    margin: 5px 1px 1px 1px;
    height: 200px;
    line-height: 1.3;
    width: 793.38px;
    font-size: 15px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    text-align: start;
  }

  .saveprofile-container {
    padding: 10px 0px 15px 0px;
  }
  .saveprofile-box {
    margin: -4px;
    display: flex;
    align-items: center;
  }

  .submit-button {
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    padding: 10.4px;
    cursor: pointer;
    display: inline-block;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
    margin: 4px;
    color: white;
    font-size: 13px;
    font-weight: normal;
    line-height: calc((13+2) / 13);
    font-weight: normal;
  }

  .cancel {
    color: #0074cc;
    padding: 10.4px;
    margin: 4px 4px 4px 6px;
    font-size: 13px;
    cursor: pointer;
  }
`;

const EditProfile = () => {
  return (
    <HomeWrap>
      <Sidebar />
      <div className='userinfo-container'>
        <div className='mainbar_full'>
          <div className='top-relative'>
            <div className='top-container'>
              <img
                src='../images/578b036954e5dbaa.jpeg'
                alt='shibainu'
                className='top-avatar'
              />
              <div className='top-info'>
                <div className='top-idbox'>
                  <div className='top-id'>SungJin</div>
                </div>
                <ul className='member-logrecord-box'>
                  <li className='member-logrecord'>
                    <div className='logrecord'>
                      <img
                        src='../images/cupcake.png'
                        className='birthicon'
                        alt='bithday-icon'
                      />
                      <div>Member for 5 years, 1 month</div>
                    </div>
                  </li>
                  <li className='member-logrecord'>
                    <div className='logrecord'>
                      <img
                        src='../images/clock.png'
                        className='birthicon'
                        alt='logtime-icon'
                      />
                      <div className='log-data'>Last seen this week</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='absolute-container'>
              {/* <button className='absolute-button'>Edit profile</button> */}
            </div>
          </div>
        </div>
        <div className='setting-container'>
          <ul className='setting-box'>
            <Link to='/userinfo'>
              <li className='setting-non'>Profile</li>
            </Link>
            <li className='setting-click'>Settings</li>
          </ul>
        </div>

        <div className='editbar-container'>
          <div className='editbar-sidebar-container'>
            <div className='editbar-sidebar-box'>
              <div className='editbar-sidebar-title'>PERSONAL INFORMATION</div>
              <Link to='/userinfo/edit'>
                <div className='setting-click'>Edit profile</div>
              </Link>
              <Link to='/userinfo/delete'>
                {' '}
                <div className='setting-non'>Delete profile</div>
              </Link>
            </div>
          </div>
          <div className='editprofile-container'>
            <div className='editprofile-title-container'>
              <h1>Edit your profile</h1>
            </div>
            <form className='user-edit-form-container'>
              <div className='public-information'>Public information</div>
              <div className='edit-info-container'>
                <div className='edit-info-box'>
                  <div className='profile-image-box'>
                    <div className='profile-image-title'>Profile image</div>
                    <div className='image-wrapper'>
                      <img
                        src='../images/578b036954e5dbaa.jpeg'
                        className='profile-img-file'
                        alt='profileimage'
                      />
                      <div className='image-toggle'>Change picture</div>
                    </div>
                  </div>
                  <div className='edit-input-container'>
                    <label htmlFor='displayname' className='edit-input-title'>
                      Display name
                    </label>
                    <input
                      type='text'
                      className='edit-input'
                      id='displayname'
                    />
                  </div>
                  <div className='edit-input-container'>
                    <label htmlFor='location' className='edit-input-title'>
                      Location
                    </label>
                    <input type='text' className='edit-input' id='location' />
                  </div>
                  <div className='edit-input-container'>
                    <label htmlFor='title' className='edit-input-title'>
                      Title
                    </label>
                    <input
                      type='text'
                      className='edit-input'
                      id='title'
                      placeholder='No title has been set'
                    />
                  </div>
                  <div className='edit-input-container'>
                    <label htmlFor='intro' className='edit-input-title'>
                      About me
                    </label>
                    <textarea className='textarea-intro' id='intro' />
                  </div>
                </div>
              </div>
            </form>

            <div className='saveprofile-container'>
              <div className='saveprofile-box'>
                <button className='submit-button'>Save profile</button>
                <div className='cancel'>Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrap>
  );
};

export default EditProfile;
