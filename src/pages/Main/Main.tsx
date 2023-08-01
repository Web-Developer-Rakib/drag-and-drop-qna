import { useState } from "react";
import DraggableAnswer from "../../components/DraggableAnswer/DraggableAnswer";
import DropZone from "../../components/DropZone/DropZone";
import { questions } from "../../utils/constants";
import "./Main.css";

const QuestionAnswerApp = () => {
  const [isCorrect, setIsCorrect] = useState(questions.map(() => false));
  const [droppedAnswers, setDroppedAnswers] = useState(
    questions.map(() => "___")
  );

  const handleDrop = (
    answer: string,
    questionIndex: number,
    correctAnswer: string
  ) => {
    setIsCorrect((prevIsCorrect) => {
      const updatedIsCorrect = [...prevIsCorrect];
      updatedIsCorrect[questionIndex] = answer === correctAnswer;
      return updatedIsCorrect;
    });
    const updatedAnswers = [...droppedAnswers];
    updatedAnswers[questionIndex] = answer;
    setDroppedAnswers(updatedAnswers);
  };
  const splitQuestions = questions.map((q) => q.question.split("___"));
  return (
    <div>
      <h1>Drag and drop correct answer</h1>
      {questions.map((q, index) => (
        <div className="qna-div" key={index}>
          <div className="answers">
            {q.answers.map((answer, answerIndex) => (
              <DraggableAnswer
                key={answerIndex}
                answer={answer.answer}
                bgColor={answer.color}
              />
            ))}
          </div>
          <div className="question">
            <div>{splitQuestions[index][0]}</div>
            <DropZone
              onDrop={(answer) => handleDrop(answer, index, q.correctAnswer)}
              isCorrect={isCorrect[index]}
              droppedAnswers={droppedAnswers[index]}
            >
              {droppedAnswers[index]}
            </DropZone>
            <div>{splitQuestions[index][1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswerApp;
