import { ReactNode, useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useDrop } from "react-dnd";
import "./DropZone.css";
interface IProps {
  onDrop: (answer: string) => void;
  children: ReactNode;
  isCorrect: boolean;
  droppedAnswers: string;
}
const DropZone = ({ onDrop, children, isCorrect, droppedAnswers }: IProps) => {
  const [errorAnimation, setErrorAnimation] = useState<boolean>(false);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "ANSWER",
    drop: (item: any) => {
      onDrop(item.answer);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  useEffect(() => {
    // Check if isCorrect is false and droppedAnswers is not "___"
    if (!isCorrect && droppedAnswers !== "___") {
      // Update the newErrorAnswer state to trigger the error animation
      setErrorAnimation(true);

      // Set a timer to reset the newErrorAnswer state after the animation duration (you can adjust the duration accordingly)
      const animationDuration = 1000; // 1 second
      const timer = setTimeout(() => {
        setErrorAnimation(false);
      }, animationDuration);

      // Clean up the timer when the component unmounts or when the effect runs again
      return () => clearTimeout(timer);
    }
  }, [isCorrect, droppedAnswers]);
  return (
    <div
      ref={drop}
      className={`${droppedAnswers === "___" ? "" : "answer"} ${
        errorAnimation ? "error-animation" : ""
      }`}
      style={{
        backgroundColor:
          isOver && canDrop
            ? "lightgreen"
            : droppedAnswers === "___"
            ? "transparent"
            : isCorrect
            ? "#55ed3e"
            : "#ed4747",
      }}
    >
      {children}
      {isCorrect && <ConfettiExplosion />}
    </div>
  );
};

export default DropZone;
