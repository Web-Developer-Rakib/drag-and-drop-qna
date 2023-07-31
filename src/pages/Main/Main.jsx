import React, { useState } from "react";
import DraggableAnswer from "../../components/DraggableAnswer/DraggableAnswer";
import DropZone from "../../components/DropZone/DropZone";
import { questions } from "../../utils/constants";
import "./Main.css";

const QuestionAnswerApp = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [droppedAnswers, setDroppedAnswers] = useState(
    questions.map(() => "___")
  );

  const handleDrop = (answer, questionIndex, correctAnswer) => {
    setIsCorrect(answer === correctAnswer);
    const updatedAnswers = [...droppedAnswers];
    updatedAnswers[questionIndex] = answer;
    setDroppedAnswers(updatedAnswers);
  };
  const splitQuestions = questions.map((q) => q.question.split("___"));
  return (
    <div>
      {questions.map((q, index) => (
        <React.Fragment key={index}>
          {q.answers.map((answer, answerIndex) => (
            <DraggableAnswer key={answerIndex} answer={answer} />
          ))}
          <div className="question">
            <span>{splitQuestions[index][0]}</span>
            <DropZone
              onDrop={(answer) => handleDrop(answer, index, q.correctAnswer)}
            >
              {droppedAnswers[index]}
            </DropZone>
            <span>{splitQuestions[index][1]}</span>
          </div>
        </React.Fragment>
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
