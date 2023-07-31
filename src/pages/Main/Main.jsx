import { useState } from "react";
import DraggableAnswer from "../../components/DraggableAnswer/DraggableAnswer";
import DropZone from "../../components/DropZone/DropZone";

const QuestionAnswerApp = () => {
  const [question, setQuestion] = useState(
    "Fill in the blank: The capital of France is ___"
  );
  const [answers, setAnswers] = useState(["Paris", "London", "Berlin"]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [droppedAnswer, setDropAnswer] = useState("___");

  const handleDrop = (answer) => {
    const correctAnswer = "Paris";
    setIsCorrect(answer === correctAnswer);
    setDropAnswer(answer);
  };
  const splitQuestion = question.split("___");
  const beforeBlank = splitQuestion[0];
  const afterBlank = splitQuestion[1];
  return (
    <div className="question-answer-app">
      <div className="question">
        <span>{beforeBlank}</span>
        <DropZone onDrop={handleDrop}>{droppedAnswer}</DropZone>
        <span>{afterBlank}</span>
      </div>
      {answers.map((answer, index) => (
        <DraggableAnswer key={index} answer={answer} />
      ))}
      {isCorrect ? (
        <div className="feedback-correct">Correct!</div>
      ) : (
        <div className="feedback-incorrect">Incorrect!</div>
      )}
    </div>
  );
};

export default QuestionAnswerApp;
