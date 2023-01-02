import styled from 'styled-components';
import PageListButton from '../Components/PageListButton';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  text-align: left;

  .tags-page-container {
    max-width: 1100px;
    border-left: 1px solid hsl(210, 8%, 85%);
    padding: 2.4rem;
    box-sizing: border-box;
  }

  .headline-container {
    display: flex;
  }

  .headline-box {
    flex: 1 auto;
    margin-bottom: 2.4rem;
  }
  .tags-headline {
    font-size: 2.7rem;
    font-weight: 400;
    line-height: 1.3;
  }

  .tags-intro {
    margin-bottom: 1.6rem;
    clear: both;
    padding: 0;
    font-size: 13px;
  }

  .search-button {
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
    margin-left: 0.3em;
    font-size: 15px;
    color: white;
  }

  .all-question-count {
    margin-bottom: 12px;
  }
  .question-list {
    margin-bottom: 20px;
    margin-left: -24px;
    border-top: 1px solid hsl(210, 8%, 90%);
  }
  .question-container {
    display: flex;
    padding: 16px;
    border-bottom: 1px solid hsl(210, 8%, 90%);
  }

  .question-left {
    margin-right: 16px;
    margin-bottom: 4px;
    width: 108px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 13px;
  }

  .left-othercolor {
    color: #6a737c;
  }

  .right {
    width: 100%;
  }

  .question-title {
    margin-top: -1.95px;
    margin-bottom: 5px;
    padding-right: 24px;
    font-weight: 400;
    color: #0074cc;
  }

  .question-answer {
    margin: -2px 0px 8px 0px;
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .question-etc-container {
    display: flex;
    justify-content: space-between;
  }

  .etc-tag-conatiner {
    display: flex;
  }

  .tag-name {
    font-size: 12px;
    background-color: hsl(205, 46%, 92%);
    border-color: transparent;
    color: hsl(205, 47%, 42%);
    display: inline-block;
    padding: 0.4em;
    margin-right: 8px;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    cursor: pointer;
  }

  .usercard-container {
    display: flex;
    > * {
      font-size: 12px;
    }
  }

  .profilephoto {
    height: 16px;
    width: 16px;
  }

  .etc-id {
    margin: 0px 4px;
    color: #0074cc;
  }

  .etc-award {
    font-weight: 700;
    color: #525960;
    margin-right: 4px;
  }
  .etc-uploadtime {
    color: #6a737c;
  }
`;

const TaggedQuestion = () => {
  return (
    <HomeContainer>
      <HomeWrap>
        <Sidebar />

        <div className='tags-page-container'>
          <div className='tags-mainbar'>
            <div className='headline-container'>
              <div className='headline-box'>
                <h1 className='tags-headline'>Questions tagged [javascript]</h1>
              </div>
              <div>
                <div className='search-button'>Ask Question</div>
              </div>
            </div>
            <p className='tags-intro'>
              For questions about programming in ECMAScript (JavaScript/JS) and
              its different dialects/implementations (except for ActionScript).
              Keep in mind that JavaScript is NOT the same as Java! Include all
              labels that are relevant to your question; e.g., [node.js],
              [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js],
              [typescript], [svelte], etc.
            </p>

            <div className='all-question-count'>2,462,353 questions</div>
            <div className='question-list'>
              <div className='question-container'>
                <div className='question-left'>
                  <div className='votesWrap'>
                    <span>0&nbsp;</span>
                    <span>votes</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>answers</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>views</span>
                  </div>
                </div>
                <div className='right'>
                  <h3 className='question-title'>질문 제목</h3>
                  <div className='question-answer'>질문 답변</div>
                  <div className='question-etc-container'>
                    <div class='etc-tag-conatiner'>
                      <div className='tag-name'>python</div>
                      <div className='tag-name'>oracle</div>
                    </div>
                    <div className='usercard-container'>
                      <div>
                        <img
                          src='../logo512.png'
                          alt='profilephoto'
                          className='profilephoto'
                        />
                      </div>
                      <div className='etc-id'>SungJin</div>
                      <div className='etc-award'>53</div>
                      <div className='etc-uploadtime'>asked 2 mins ago</div>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div className='question-container'>
                <div className='question-left'>
                  <div className='votesWrap'>
                    <span>0&nbsp;</span>
                    <span>votes</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>answers</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>views</span>
                  </div>
                </div>
                <div className='right'>
                  <h3 className='question-title'>질문 제목</h3>
                  <div className='question-answer'>질문 답변</div>
                  <div className='question-etc-container'>
                    <div class='etc-tag-conatiner'>
                      <div className='tag-name'>python</div>
                      <div className='tag-name'>oracle</div>
                    </div>
                    <div className='usercard-container'>
                      <div>
                        <img
                          src='../logo512.png'
                          alt='profilephoto'
                          className='profilephoto'
                        />
                      </div>
                      <div className='etc-id'>SungJin</div>
                      <div className='etc-award'>53</div>
                      <div className='etc-uploadtime'>asked 2 mins ago</div>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div className='question-container'>
                <div className='question-left'>
                  <div className='votesWrap'>
                    <span>0&nbsp;</span>
                    <span>votes</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>answers</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>views</span>
                  </div>
                </div>
                <div className='right'>
                  <h3 className='question-title'>질문 제목</h3>
                  <div className='question-answer'>질문 답변</div>
                  <div className='question-etc-container'>
                    <div class='etc-tag-conatiner'>
                      <div className='tag-name'>python</div>
                      <div className='tag-name'>oracle</div>
                    </div>
                    <div className='usercard-container'>
                      <div>
                        <img
                          src='../logo512.png'
                          alt='profilephoto'
                          className='profilephoto'
                        />
                      </div>
                      <div className='etc-id'>SungJin</div>
                      <div className='etc-award'>53</div>
                      <div className='etc-uploadtime'>asked 2 mins ago</div>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div className='question-container'>
                <div className='question-left'>
                  <div className='votesWrap'>
                    <span>0&nbsp;</span>
                    <span>votes</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>answers</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>views</span>
                  </div>
                </div>
                <div className='right'>
                  <h3 className='question-title'>질문 제목</h3>
                  <div className='question-answer'>질문 답변</div>
                  <div className='question-etc-container'>
                    <div class='etc-tag-conatiner'>
                      <div className='tag-name'>python</div>
                      <div className='tag-name'>oracle</div>
                    </div>
                    <div className='usercard-container'>
                      <div>
                        <img
                          src='../logo512.png'
                          alt='profilephoto'
                          className='profilephoto'
                        />
                      </div>
                      <div className='etc-id'>SungJin</div>
                      <div className='etc-award'>53</div>
                      <div className='etc-uploadtime'>asked 2 mins ago</div>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div className='question-container'>
                <div className='question-left'>
                  <div className='votesWrap'>
                    <span>0&nbsp;</span>
                    <span>votes</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>answers</span>
                  </div>
                  <div className='left-othercolor'>
                    <span>0&nbsp;</span>
                    <span>views</span>
                  </div>
                </div>
                <div className='right'>
                  <h3 className='question-title'>질문 제목</h3>
                  <div className='question-answer'>질문 답변</div>
                  <div className='question-etc-container'>
                    <div class='etc-tag-conatiner'>
                      <div className='tag-name'>python</div>
                      <div className='tag-name'>oracle</div>
                    </div>
                    <div className='usercard-container'>
                      <div>
                        <img
                          src='../logo512.png'
                          alt='profilephoto'
                          className='profilephoto'
                        />
                      </div>
                      <div className='etc-id'>SungJin</div>
                      <div className='etc-award'>53</div>
                      <div className='etc-uploadtime'>asked 2 mins ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageListButton />
        </div>
      </HomeWrap>
      <Footer />
    </HomeContainer>
  );
};

export default TaggedQuestion;
