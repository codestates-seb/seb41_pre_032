import styled from "styled-components";

const DiscardWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: ${(props) => (props.displayWrap === 0 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  > .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(44, 16, 21, 0.5);
  }
  > .contents {
    background-color: #fff;
    position: relative;
    z-index: 1;
    padding: 2.4rem;
    max-width: 60rem;
    border-radius: 7px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.09), 0 3px 8px rgba(0, 0, 0, 0.09),
      0 4px 13px rgba(0, 0, 0, 0.13);
    > h3 {
      color: #c22e32;
      font-size: 2.7rem;
      font-weight: normal;
      margin-bottom: 1.6rem;
    }
    > p {
      color: #3b4045;
      margin-bottom: 2.4rem;
      font-size: 1.3rem;
    }
    > .btnWrap {
      display: flex;
      > button {
        padding: 1rem;
        margin: 0 0.8rem;
        border-radius: 3px;
        font-size: 1.3rem;
        border: 1px solid transparent;
        cursor: pointer;
      }
      > .discard {
        margin-left: 0;
        background-color: #c22e32;
        color: #fff;
      }
      > .discard:hover {
        background-color: #b21e22;
      }
      > .cancel {
        background-color: transparent;
        color: #6a737c;
      }
      > .cancel:hover {
        background-color: #f8f9f9;
      }
    }
    > .close {
        position: absolute;
        cursor: pointer;
        right: .8rem;
        top: .8rem;
        padding: 1.2rem;
        border: 1px solid transparent;
        background-color: transparent;
    }
  }
`;
const Discard = ({ active, deleteContent, handleDiscard }) => {
  return (
    <DiscardWrap displayWrap={active}>
      <div className="contents">
        <h3>Discard question</h3>
        <p>
          Are you sure you want to discard this question? This cannot be undone.
        </p>
        <div className="btnWrap">
          <button
            className="discard"
            onClick={() => {
              deleteContent();
              handleDiscard();
            }}
          >
            Discard question
          </button>
          <button
            className="cancel"
            onClick={() => {
              handleDiscard();
            }}
          >
            Cancel
          </button>
        </div>
        <button
          className="close"
          onClick={() => {
            handleDiscard();
          }}
        >
          <img alt="close" src="../images/closeBtn.png" />
        </button>
      </div>
      <div
        className="background"
        onClick={() => {
          handleDiscard();
        }}
      />
    </DiscardWrap>
  );
};
export default Discard;
