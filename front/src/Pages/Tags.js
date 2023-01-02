import Sidebar from '../Components/Sidebar';
import styled from 'styled-components';
import PageListButton from '../Components/PageListButton';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    display: flex;
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
    border-radius: 3px;
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
    <BodyWrap>
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
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>python</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  Python is a multi-paradigm, dynamically typed, multi-purpose
                  programming language. It is designed to be quick to learn,
                  understand, and use, and enforces a clean and uniform syntax.
                  Please note that Python 2 is officially out of support as of
                  2020-01-01. For version-specific Python questions, add the
                  [python-2.7] or [python-3.x] tag. When using a Python variant
                  (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please
                  include it in the tags.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>2084978 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      480 asked today, 4458 this week
                    </a>
                  </div>
                </div>
              </div>
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>java</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  Java is a high-level object-oriented programming language. Use
                  this tag when you're having problems using or understanding
                  the language itself. This tag is frequently used alongside
                  other tags for libraries and/or frameworks used by Java
                  developers.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>1881680 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      158 asked today, 1541 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>c#</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  C# (pronounced "see sharp") is a high-level, statically typed,
                  multi-paradigm programming language developed by Microsoft. C#
                  code usually targets Microsoft's .NET family of tools and
                  run-times, which include .NET, .NET Framework, .NET MAUI, and
                  Xamarin among others. Use this tag for questions about code
                  written in C# or about C#'s formal specification.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>1574998 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      97 asked today, 1143 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>php</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  PHP is a widely used, open source, general-purpose,
                  multi-paradigm, dynamically typed and interpreted scripting
                  language designed initially for server-side web development.
                  Use this tag for questions about programming in the PHP
                  language.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>1452994 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      88 asked today, 893 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>android</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  Android is Google's mobile operating system, used for
                  programming or developing digital devices (Smartphones,
                  Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics
                  related to Android, use Android-specific tags such as
                  android-intent, android-activity, android-adapter, etc. For
                  questions other than development or programming but related to
                  the Android framework, use this link:
                  https://android.stackexchange.com.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>1395205 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      87 asked today, 987 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>jquery</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  jQuery is a JavaScript library. Consider also adding the
                  JavaScript tag. jQuery is a popular cross-browser JavaScript
                  library that facilitates Document Object Model (DOM)
                  traversal, event handling, animations and AJAX interactions by
                  minimizing the discrepancies across browsers. A question
                  tagged jQuery should be related to jQuery, so jQuery should be
                  used by the code in question, and at least jQuery
                  usage-related elements must be in the question.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>1031941 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      24 asked today, 270 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>c++</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  jQuery is a JavaScript library. Consider also adding the C++
                  is a general-purpose programming language. Initially, it was
                  designed as an extension to C and has a similar syntax, but it
                  is now a completely different language. Use this tag for
                  questions about code (to be) compiled with a C++ compiler. Use
                  a version-specific tag for questions related to a specific
                  standard revision [C++11], [C++14], [C++17], [C++20], or
                  [C++23], etc.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>785522 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      74 asked today, 715 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>html</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  HTML (HyperText Markup Language) is the markup language for
                  creating web pages and other information to be displayed in a
                  web browser. Questions regarding HTML should include a minimal
                  reproducible example and some idea of what you're trying to
                  achieve. This tag is rarely used alone and is often paired
                  with [CSS] and [JavaScript].
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>1159442 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      132 asked today, 1233 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>css</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  CSS (Cascading Style Sheets) is a representation style sheet
                  language used for describing the look and formatting of HTML
                  (HyperText Markup Language), XML (Extensible Markup Language)
                  documents and SVG elements including (but not limited to)
                  colors, layout, fonts, and animations. It also describes how
                  elements should be rendered on screen, on paper, in speech, or
                  on other media.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>781771 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      85 asked today, 888 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>ios</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  iOS is the mobile operating system running on the Apple
                  iPhone, iPod touch, and iPad. Use this tag [ios] for questions
                  related to programming on the iOS platform. Use the related
                  tags [objective-c] and [swift] for issues specific to those
                  programming languages.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>677974 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      22 asked today, 306 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>mysql</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  MySQL is a free, open-source Relational Database Management
                  System (RDBMS) that uses Structured Query Language (SQL). DO
                  NOT USE this tag for other DBs such as SQL Server, SQLite etc.
                  Those are different DBs that all use their own dialects of SQL
                  to manage the data.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>656121 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      39 asked today, 532 this week
                    </a>
                  </div>
                </div>
              </div>
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>sql</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  Structured Query Language (SQL) is a language for querying
                  databases. Questions should include code examples, table
                  structure, sample data, and a tag for the DBMS implementation
                  (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.)
                  being used. If your question relates solely to a specific DBMS
                  (uses specific extensions/features), use that DBMS's tag
                  instead. Answers to questions tagged with SQL should use
                  ISO/IEC standard SQL.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>652189 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      41 asked today, 526 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>r</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  R is a free, open-source programming language & software
                  environment for statistical computing, bioinformatics,
                  visualization & general computing. Please use minimal
                  reproducible example(s) others can run using copy & paste.
                  Show desired output. Use dput() for data & specify all
                  non-base packages with library(). Don't embed pictures for
                  data or code, use indented code blocks instead. For statistics
                  questions, use https://stats.stackexchange.com.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>476246 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      59 asked today, 638 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>node.js</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  Node.js is an event-based, non-blocking, asynchronous I/O
                  runtime that uses Google's V8 JavaScript engine and libuv
                  library. It is used for developing applications that make
                  heavy use of the ability to run JavaScript both on the client
                  as well as on the server side and therefore benefit from the
                  re-usability of code and the lack of context switching.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>452876 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      84 asked today, 955 this week
                    </a>
                  </div>
                </div>
              </div>{' '}
              <div className='eachtag-container'>
                <ul className='tags-tag'>
                  <Link to='/tags/tagged'>
                    <li className='tags-tag-name'>reactjs</li>
                  </Link>
                </ul>
                <div className='tags-tag-intro'>
                  React is a JavaScript library for building user interfaces. It
                  uses a declarative, component-based paradigm and aims to be
                  efficient and flexible.
                </div>
                <div className='tags-tag-etc-container'>
                  <div className='tags-tag-etc'>435807 questions</div>
                  <div className='tags-tag-etc'>
                    <a href='/login' className='tags-tag-etc'>
                      153 asked today, 1674 this week
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <PageListButton />
          </div>
        </div>
      </HomeWrap>
      <Footer />
    </BodyWrap>
  );
}

export default Tags;
