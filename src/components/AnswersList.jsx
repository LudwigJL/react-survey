import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answerList } = props;

  return (
    <ul>
       {answerList.length > 0 ? answerList.map((answer, i) => (
         <AnswersItem answer={answer} key={i} />
       )) : null}
     </ul>
  );
}

