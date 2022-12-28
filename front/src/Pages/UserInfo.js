import Sidebar from "../Components/Sidebar";
import styled from "styled-components";

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
      > .setting {
        padding: 6px 12px;
        background-color: orange;
        font-size: 13px;
        color: white;
        border-radius: 1000px;
        border: none;
        cursor: pointer;
      }
    }
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
`;

const UserInfo = () => {
  return (
    <HomeWrap>
      <Sidebar />
      <div className="userinfo-container">
        <div className="mainbar_full">
          <div className="top-relative">
            <div className="top-container">
              <img
                src="../images/578b036954e5dbaa.jpeg"
                alt="shibainu"
                className="top-avatar"
              />
              <div className="top-info">
                <div className="top-idbox">
                  <div className="top-id">SungJin</div>
                </div>
                <ul className="member-logrecord-box">
                  <li className="member-logrecord">
                    <div className="logrecord">
                      <img
                        src="../images/cupcake.png"
                        className="birthicon"
                        alt="bithday-icon"
                      />
                      <div>Member for 5 years, 1 month</div>
                    </div>
                  </li>
                  <li className="member-logrecord">
                    <div className="logrecord">
                      <img
                        src="../images/clock.png"
                        className="birthicon"
                        alt="logtime-icon"
                      />
                      <div className="log-data">Last seen this week</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute-container">
              <button className="absolute-button">Profiles</button>
            </div>
          </div>
        </div>
        <div className="setting-container">
          <ul className="setting-box">
            <li className="setting">Profile</li>
            <li className="setting">Saves</li>
            <li className="setting">Settings</li>
          </ul>
        </div>
        <div className="main-content-container">
          <div className="main-content">
            <div className="left-content-container">
              <div className="left-content">
                <div className="stats-box">
                  <div className="stats-title">Stats</div>
                  <div className="stats-content-container">
                    <div className="stats-content-box">
                      <div className="stats-content">
                        <div className="stats-content-data">10,003</div>
                        reputation
                      </div>
                      <div className="stats-content">
                        <div className="stats-content-data">2.6m</div>
                        reached
                      </div>
                      <div className="stats-content">
                        <div className="stats-content-data">184</div>
                        answers
                      </div>
                      <div className="stats-content">
                        <div className="stats-content-data">4</div>
                        questions
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="communities-container">
                    <dlv className="communities-title-box">
                        <div className="communities-title">Communities</div>
                        <div className="title-link">view all</div>
                    </dlv>
                    <div className="communities-top5-container"></div>
                    
                </div> */}
              </div>
            </div>
            <div className="right-content-container">
              <div className="about-container">
                <div className="about-title">About</div>
                <div className="about-content">
                  자기소개를 임의로 써봅니다. 자기소개를 임의로 써봅니다.
                  자기소개를 임의로 써봅니다.{" "}
                </div>
              </div>
              <div className="posts-container">
                <div className="about-title">Posts</div>
                <div className="posts-lists">
                  <div className="each-post">
                    <div className="each-post-title">질문 목록 1</div>
                    <div className="each-post-date">Jun 12, 2013</div>
                  </div>
                  <div className="each-post">
                    <div className="each-post-title">질문 목록 2</div>
                    <div className="each-post-date">Jun 12, 2013</div>
                  </div>
                  <div className="each-post-last">
                    <div className="each-post-title">질문 목록 3</div>
                    <div className="each-post-date">Jun 12, 2013</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrap>
  );
};

export default UserInfo;
