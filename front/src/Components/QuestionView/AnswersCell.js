import styled from "styled-components";
import useFetch from "../../util/useFetch";
import Loading from "../Loading";
import Answer from "./Answer";
import AnswerCreate from "./AnswerCreate";


const AnswersLayout = styled.article`
  padding-top: 1rem;
  h2 {
    font-weight: 400;
    color: #232629;
    font-size: 1.9rem;
  }
`;

const AnswersCell = ({ id }) => {
  const [data, isPending, error] = useFetch(
    `${process.env.REACT_APP_API_URL}/api/answers/questions/${id}?page=1&size=100`
  );
  let answers;
  if (data) {
    answers = data.data;
  }

  console.log(data)
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
            <Answer key={answer.id} answer={answer} />
          ))}
          <AnswerCreate id={id}/>
        </div>
      )}
    </AnswersLayout>
  );
};
export default AnswersCell;
