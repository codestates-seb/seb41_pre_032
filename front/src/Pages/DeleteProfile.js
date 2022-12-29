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
    display: flex;
    flex-direction: column;
  }

  .editbar-sidebar-title {
    padding: 6px 12px;
    color: #232629;
    font-size: 11px;
    font-weight: bold;
  }

  .deleteprofile-title-container {
    padding-bottom: 16px;
    border-bottom: 1px solid hsl(210, 8%, 85%);
    margin-bottom: 24px;
    > h1 {
      font-size: 27px;
      font-weight: normal;
    }
  }

  .delete-intro-container {
    > p {
      font-size: 15px;
      margin-bottom: 16.5px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    > ul {
      list-style: disc;
      margin: 0px 0px 16.5px 30px;
      font-size: 15px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      > li {
        margin-bottom: 8.25px;
      }
    }
  }

  .delete-formbox {
    margin-bottom: 24px;
  }

  .deletecheck-label {
    margin: 4px;
    padding: 0px 2px;
    cursor: pointer;
  }

  .formbox {
    margin-bottom: 24px;
  }

  .delete-button {
    padding: 10.4px;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: hsl(358, 62%, 47%);
    color: white;
    font-size: 13px;
    cursor: pointer;
  }
`;

const DeleteProfile = () => {
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
                <div className='setting-non'>Edit profile</div>
              </Link>
              <Link to='/userinfo/delete'>
                <div className='setting-click'>Delete profile</div>
              </Link>
            </div>
          </div>
          <div className='deleteprofile-container'>
            <div className='deleteprofile-title-container'>
              <h1>Delete Profile</h1>
            </div>
            <div className='delete-intro-container'>
              <p>
                Before confirming that you would like your profile deleted, we'd
                like to take a moment to explain the implications of deletion:
              </p>
              <ul>
                <li>
                  Deletion is irreversible, and you will have no way to regain
                  any of your original content, should this deletion be carried
                  out and you change your mind later on.
                </li>
                <li>
                  Your questions and answers will remain on the site, but will
                  be disassociated and anonymized (the author will be listed as
                  "user20812601") and will not indicate your authorship even if
                  you later return to the site.
                </li>
              </ul>
              <p>
                Confirming deletion will only delete your profile on Stack
                Overflow - it will not affect any of your other profiles on the
                Stack Exchange network. If you want to delete multiple profiles,
                you'll need to visit each site separately and request deletion
                of those individual profiles.
              </p>
              <form>
                <div className='delete-formbox'>
                  <div className='formbox'>
                    <input
                      type='checkbox'
                      className='delete-checkbox'
                      id='deletecheck'
                    />
                    <label htmlFor='deletecheck' className='deletecheck-label'>
                      I have read the information stated above and understand
                      the implications of having my profile deleted. I wish to
                      proceed with the deletion of my profile.
                    </label>
                  </div>
                </div>
                <button className='delete-button'>Delete profile</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HomeWrap>
  );
};

export default DeleteProfile;
