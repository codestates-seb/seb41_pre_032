import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MissingWrap = styled.div`
  padding: 100px;
  background-color: hsl(210, 8%, 95%);

  .notfound-container {
    display: flex;
    justify-content: center;
    > img {
      margin: -16px 30px 16px 16px;
      width: 196px;
      height: 196px;
    }
  }

  .notfound-intro {
    margin: 16px;
    > h1 {
      font-size: 27px;
      margin-bottom: 4px;
      line-height: 1.3;
      font-weight: 400;
    }

    > p {
      margin-bottom: 19px;
      font-size: 19px;
    }
  }

  .intro-detail {
    > p {
      margin-bottom: 15px;
      font-size: 15px;
    }
  }

  .link {
    color: #0074cc;
  }
`;

const Missing = () => {
  return (
    <MissingWrap>
      <div className='notfound-container'>
        <img src='../images/404found.png' alt='notfoundimg' />
        <div className='notfound-intro'>
          <h1>Page not Found</h1>
          <p>We're sorry, we couldn't find the page you requested.</p>
          <div className='intro-detail'>
            <p>Try searching for similar questions</p>

            <p>
              Browse our{' '}
              <Link to='/questions'>
                <span className='link'>recent questions</span>
              </Link>
            </p>
            <p>
              Browse our{' '}
              <Link to='/tags'>
                <span className='link'>popular tags</span>
              </Link>
            </p>
            <p>
              If you feel something is missing that should be here, contact us.
            </p>
          </div>
        </div>
      </div>
    </MissingWrap>
  );
};

export default Missing;
