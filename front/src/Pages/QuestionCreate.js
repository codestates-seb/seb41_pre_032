const QuestionCreate = () => {
  return (
    <div className="">
      <h1 className="">Ask a question</h1>
      <div className="">
        <h2 className="">Writing a good question</h2>
        <p className="">
          You're ready to ask your first programming-related question and the
          community is here to help!
        </p>
        <p className="">
          Looking to ask a non-programming question? See all topics &nbsp;
          <a
            href="https://stackexchange.com/sites#technology-traffic"
            className="">
            here
          </a>{" "}
          to ask on a different site.
        </p>

        <ul className="">
          <li>Step 1: Propose a question Write a question.</li>
          <p>
            Follow the step by step instructions on how to write a good,
            detailed question. The more information you provide, the better
            chances you have of it being answered.
          </p>
          <li>Step 2: In review</li>
          <p>
            Your question is locked and awaits review from experienced community
            members. The quicker you act on any feedback, the quicker your
            question will be posted to get answers.
          </p>
          <li>Step 3: Approved</li>
          <p>
            Your post question has been approved and published! It is now live
            to the community and open for votes, answers and comments.
          </p>
        </ul>
      </div>
      {/* 여기까지 좋은 질문 만드는 섹션 */}
      <div className="">
        <h5 className="">Title</h5>
        <p className="">
          Be specific and imagine you’re asking a question to another person.
        </p>
        <div className="플렉스가 필요합니다">
          <input
            id="title"
            name="title"
            type="text"
            maxLength="300"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            className=""
            data-min-length="15"
            data-max-length="150"
          />
        </div>
      </div>
      {/* 여기까지 제목을 넣는 섹션입니다. */}
      <div className="">
        <h5 className="font-bold">What are the details of your problem?</h5>
        <p className="">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
        <input id="content" type="text" data-min-length="20" />
      </div>
      {/* 여기까지 문제점을 적는 섹션입니다. */}

      <div className="">
        <h5 className="font-bold">
          What did you try and what were you expecting?
        </h5>
        <p className="">
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </p>
        <input id="content" type="text" data-min-length="20" />
      </div>
      {/* 해결했던 시도들을 적는 섹션 */}

      <div className="">
        <h5 className="font-bold">Tags</h5>
        <p className="">
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
        <input
          id="tags"
          type="text"
          placeholder="e.g. (objective-c typescript sql-server)"
          data-min-length="20"
        />
      </div>

      {/* 태그를 적는 섹션 */}

      <div className="">
        <button className="" type="button" autoComplete="off">
          Review your question
        </button>
        {/* 이 버튼을 누르면 데이터가 전송되서 홈화면 상단에 위치해야합니다. */}

        <div className="">
          <button className="" type="button">
            Discard draft
          </button>
          {/* 이 버튼을 누르면 위에서부터 입력했던 모든 입력값이 초기화 되어야합니다 */}
          {/* 정말 삭제할 것인지 확인하는 모달창이 떠야하지만 아직 구현하지 못했습니다. */}
        </div>
      </div>

      {/* 여기까지 버튼 섹션 */}
    </div>
  );
};

export default QuestionCreate;
