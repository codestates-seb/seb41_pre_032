import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-style: solid;
  border-color: hsl(210, 8%, 85%);
  border-width: 1px;
  border-radius: 3px;
  color: hsl(210, 8%, 25%);
  padding: 3px 6px;
  margin-left: 4px;

  :focus {
    background-color: hsl(27, 90%, 55%);
    border-color: transparent;
    color: white;
  }

  :hover {
    cursor: pointer;
    background-color: hsl(210, 8%, 85%);
    border-color: hsl(210, 8%, 75%);
    color: hsl(210, 8%, 5%);
  }
`;

const PageButton = ({ pg, setPage }) => {
  return <Button onClick={() => setPage(pg)}>{pg}</Button>;
};

export default PageButton;
