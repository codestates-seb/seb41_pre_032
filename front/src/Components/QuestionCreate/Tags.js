import { useState } from "react";
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
    > label {
      font-size: 1.5rem;
      font-weight: bold;
    }
    > .desc {
      font-size: 1.2rem;
      padding: 0 0.2rem;
      margin: 0.2rem 0;
    }
  }
`;

const AskSub = styled.div`
  flex-basis: calc(30% - 25px);
  position: relative;
  display: ${(props) => (props.isFocus === 3 ? "block" : "none")};
  > .sub-desc {
    right: 0;
    position: absolute;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    background-color: #fff;
    > p {
      padding: 1.2rem;
      font-size: 1.5rem;
      background-color: hsl(210, 8%, 97.5%);
      border-bottom: 1px solid hsl(210, 8%, 85%);
    }
    > .sub-desc-flex {
      display: flex;
      margin: 1.6rem;
      > .flex-item {
        margin: 0 0.8rem;
        font-size: 1.2rem;
        > p {
          margin-bottom: 1.2rem;
        }
        > p:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const TagInput = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border: 1px solid hsl(210,8%,75%);
  border-radius: 3px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #39739D;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #E1ECF4;
      > .tag-title {color:#39739D;}
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #39739D;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    padding: 0.8rem .9rem;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid #aecdea;
  }
`;

const Tags = ({ isFocus, setIsFocus }) => {
  const [tags, setTags] = useState([]);
  const removeTags = (indexToRemove) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[indexToRemove];
      })
    );
  };
  const addTags = (e) => {
    let value = e.target.value;
    if (e.key === "Enter" && !tags.includes(value) && value) {
      setTags([...tags, value]);
      e.target.value = "";
    }
    console.log(tags)
  };
  return (
    <AskWrap>
      <div className="ask-main">
        <label htmlFor="tagsInput">Tags</label>
        <p className="desc">
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
        <TagInput>
          <ul id="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() => removeTags(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
          id="tagsInput"
          name="tagsInput"
            className="tag-input"
            type="text"
            onKeyUp={(e) => {
              addTags(e);
            }}
            onClick={() => {
              setIsFocus(3);
            }}
            placeholder="e.g.(c# php objective-c)"
          />
        </TagInput>
      </div>
      <AskSub isFocus={isFocus}>
        <div className="sub-desc">
          <p>Adding tags</p>
          <div className="sub-desc-flex">
            <div className="flex-item">
              <img src="../images/create.png" alt="" />
            </div>
            <div className="flex-item">
              <p>
                Tags help ensure that your question will get attention from the
                right people.
              </p>
              <p>
                Tag things in more than one way so people can find them more
                easily. Add tags for product lines, projects, teams, and the
                specific technologies or languages used.
              </p>
            </div>
          </div>
        </div>
      </AskSub>
    </AskWrap>
  );
};

export default Tags;
