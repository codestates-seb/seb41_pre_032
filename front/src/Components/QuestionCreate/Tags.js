import styled from "styled-components";

const AskWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0 0 1.6rem 0;
  > .ask-main {
    flex-basis: 70%;
    padding: 2.4rem;
    background-color: #fff;
    border: 1px solid hsl(210, 8%, 90%);
    border-radius: 3px;
    >label {
      font-size:1.5rem;
      font-weight:bold;
    }
    >.desc {
      font-size:1.2rem;
      padding:0 .2rem;
      margin: .2rem 0;
    }
    >textarea {
      width: 100%;
      height: 20rem;
      padding: .8rem .9rem;
      border:1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      color:hsl(210, 8%, 5%);
      font-size:1.3rem;
      resize:none;
    }
  }
  > .ask-sub {
    flex-basis: calc(30% - 25px);
    position: relative;
    > .sub-desc {
      right: 0;
      position: absolute;
      box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
      border:1px solid hsl(210, 8%, 85%);
      border-radius:3px;
      background-color:#fff;
      >p {
        padding:1.2rem;
        font-size:1.5rem;
        background-color: hsl(210, 8%, 97.5%);
        border-bottom:1px solid hsl(210, 8%, 85%);
      }
      >.sub-desc-flex {
        display:flex;
        margin:1.6rem;
        >.flex-item {
          margin:0 .8rem;
          font-size:1.2rem;
          >p {
            margin-bottom:1.2rem;
          }
          >p:last-child{
            margin-bottom:0;
          }
        }
      }
    }
  }
`;

const Tags = () => {
    return (
        <AskWrap>
        <div className="ask-main">
          <label htmlFor="expecting">Tags</label>
          <p className="desc">
          Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
          </p>
          <textarea
            id="expecting"
            name="expecting"
          />
        </div>
        <div className="ask-sub">
          <div className="sub-desc">
            <p>Adding tags</p>
            <div className="sub-desc-flex">
              <div className="flex-item">
                <img src="../images/create.png" alt="" />
              </div>
              <div className="flex-item">
                <p>Tags help ensure that your question will get attention from the right people.</p>
                <p>
                Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AskWrap>
    )
}

export default Tags