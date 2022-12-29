import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MissingWrap = styled.div`
  padding: 100px;
`;

const Missing = () => {
  return (
    <MissingWrap>
      <h1>Page not Found</h1>
      <p>We're sorry, we couldn't find the page you requested.</p>
      <div>
        <Link to='/tags'>Browse our popular tags</Link>
      </div>
    </MissingWrap>
  );
};

export default Missing;
