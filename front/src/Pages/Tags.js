import Sidebar from '../Components/Sidebar';
import styled from 'styled-components';
import PageListButton from '../Components/PageListButton';
import { Link } from 'react-router-dom';

// 새로운 페이지에 아래 스타일 컴포넌트를 최상단에 깔아줘야함
const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: left;

  .tags-page-container {
    max-width: 1100px;
    border-left: 1px solid hsl(210, 8%, 85%);
    padding: 2.4rem;
    box-sizing: border-box;
  }

  .tags-mainbar {
    width: 100%;
    padding: 0;
  }

  .tags-headline {
    font-size: 2.7rem;
    line-height: 1.3;
    margin: 0 0 1.6rem;
    font-weight: 400;
  }

  .tags-intro {
    margin-bottom: 1.6rem;
    clear: both;
    padding: 0;
    font-size: 15px;
  }

  .tags-synonyms-link {
    display: flex;
    margin: -2px -2px 24px;
    flex-wrap: wrap;
    box-sizing: inherit;
    > p {
      margin: calc((4px * 1) / 2);
      text-decoration: none;
      cursor: pointer;
      font-size: 1.3rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #0074cc;
    }
  }
  .tags-filter-container {
    position: relative;
    margin-bottom: 1.2rem;
  }

  .tags-filter {
    width: 183px;
    height: 36.78px;
    -webkit-appearance: none;
    margin: 0;
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

  .tags-list {
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: calc(1.2rem * 1) calc(1.2rem * 1);
  }

  /* 왜 그리드 적용이 안되는지 이해 불가 */
  .eachtag-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    padding: 1.2rem;
  }
  .tags-tag {
    margin-bottom: 1.2rem;
    align-items: center;
    justify-content: space-between;
  }
  .tags-tag-name {
    font-size: 1.2rem;
    color: hsl(205, 47%, 42%);
    background-color: hsl(205, 46%, 92%);
    border-color: transparent;
    margin: 2px 2px 2px 0px;
    padding: 4.8px 6px;
    text-align: center;
    border-style: solid;
    width: 65.7px;
    height: 27.59px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
  }

  .tags-tag-intro {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0px 0px 12px;
    font-size: 1.3rem;
  }

  .tags-tag-etc-container {
    display: flex;
    font-size: 1.2rem;
    margin-top: auto;
    justify-content: space-between;
    color: hsl(210, 8%, 55%);
  }

  .tags-tag-etc {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    > a {
      font-size: 1.2rem;
      color: hsl(210, 8%, 55%);
    }
  }
`;
function Tags() {
  return (
    <HomeWrap>
      <Sidebar />
      {/* 태그 인포메이션과 태그 검색기능, 태그리스트로 구성 */}

      <div className='tags-page-container'>
        <div className='tags-mainbar'>
          <h1 className='tags-headline'>Tags</h1>
          <p className='tags-intro'>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
          <div className='tags-synonyms-link'>
            <p>Show all tag synonyms</p>
          </div>
          <div className='tags-filter-container'>
            <input
              type='text'
              placeholder='Filter by tag name'
              className='tags-filter'
            />
          </div>
          <div className='tags-list'>
          <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>  <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>  <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>  <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>  <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>  <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>  <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>  <div className='eachtag-container'>
              <ul className='tags-tag'>
                <Link to='/tags/tagged'>
                  <li className='tags-tag-name'>javascript</li>
                </Link>
              </ul>
              <div className='tags-tag-intro'>
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Keep in mind that JavaScript is NOT the same as
                Java! Include all labels that are relevant to your question;
                e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular],
                [ember.js], [vue.js], [typescript], [svelte], etc.
              </div>
              <div className='tags-tag-etc-container'>
                <div className='tags-tag-etc'>2460631 questions</div>
                <div className='tags-tag-etc'>
                  <a href='/login' className='tags-tag-etc'>
                    558 asked today, 3583 this week
                  </a>
                </div>
              </div>
            </div>
          </div>
          <PageListButton />
        </div>
      </div>
    </HomeWrap>
  );
}

export default Tags;
