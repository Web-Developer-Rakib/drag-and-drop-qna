import { ReactNode } from "react";
import { useDrop } from "react-dnd";
interface IProps {
  onDrop: (answer: string) => void;
  children: ReactNode;
  isCorrect: boolean;
  droppedAnswers: string;
}
const DropZone = ({ onDrop, children, isCorrect, droppedAnswers }: IProps) => {
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

  return (
    <span
      ref={drop}
      className={droppedAnswers === "___" ? "" : "answer"}
      style={{
        backgroundColor:
          isOver && canDrop
            ? "lightgreen"
            : droppedAnswers === "___"
            ? "transparent"
            : isCorrect
            ? "#55ed3e"
            : "#ed3e3e",
      }}
    >
      {children}
    </span>
  );
};

export default DropZone;
