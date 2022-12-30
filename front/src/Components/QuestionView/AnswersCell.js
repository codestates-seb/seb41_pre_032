import styled from "styled-components";
import useFetch from "../../util/useFetch";
import Loading from "../Loading";

const AnswersLayout = styled.article``;

const AnswersCell = ({ id }) => {
  const [data, isPending, error] = useFetch(
    `${process.env.REACT_APP_API_URL}/api/answers/${id}?page=1&size=100`
  );
  let answers;
  if (data) {
    answers = data.data;
  }
  console.log(answers)

  return (
    <AnswersLayout>
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {data && (
        <div className="answers-wrap">
          <h2>
            {answers.length > 0
              ? `${answers.length} Answers`
              : "Know someone who can answer? Share a link to this question via email, Twitter, or Facebook."}
          </h2>
          {answers.map((answer) => (
            <div key={answer.id} className="answer">
              <div className="votecell"></div>
              <div className="answercell">{answer.contents}</div>
            </div>
          ))}
        </div>
      )}
    </AnswersLayout>
  );
};
export default AnswersCell;
