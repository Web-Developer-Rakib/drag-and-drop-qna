import { useDrag } from "react-dnd";
import "./DraggableAnswer.css";

interface IProps {
  answer: string;
  bgColor: string;
}
const DraggableAnswer = ({ answer, bgColor }: IProps) => {
  console.log(bgColor);
  const [{ isDragging }, drag] = useDrag({
    type: "ANSWER",
    item: { answer },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      style={{
        opacity,
        cursor: "move",
        backgroundColor: bgColor,
      }}
      className="answer"
    >
      {answer}
    </div>
  );
};

export default DraggableAnswer;
