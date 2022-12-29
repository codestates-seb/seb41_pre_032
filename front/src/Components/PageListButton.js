import styled from 'styled-components';

const PageListButtonStyle = styled.div`
  .tags-page-Container {
    display: flex;
    color: hsl(210, 8%, 15%);
    flex-wrap: wrap;
    gap: 0.4rem;
    margin: 20px 0;
    float: right;
    > .tags-page-button {
      padding: 0px 8px;
      border: 1px solid hsl(210, 8%, 85%);
      border-radius: 3px;
      line-height: calc((13+12) / 13) px;
      font-size: 13px;
      color: hsl(210, 8%, 25%);
      cursor: pointer;
    }
  }
`;

const PageListButton = () => {
  return (
    <PageListButtonStyle>
      <div className='tags-page-Container'>
        <div className='tags-page-button'>1</div>
        <div className='tags-page-button'>2</div>
        <div className='tags-page-button'>3</div>
        <div className='tags-page-button'>4</div>
        <div className='tags-page-button'>5</div>
        <div className='tags-page-button'>...</div>
        <div className='tags-page-button'>끝페이지</div>
        <div className='tags-page-button'>Next</div>
        {/* 버튼리스트는 따로 빼기 */}
      </div>
    </PageListButtonStyle>
  );
};
export default PageListButton;
