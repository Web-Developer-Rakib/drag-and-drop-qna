import { useDrag } from "react-dnd";

const DraggableAnswer = ({ answer }: any) => {
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
        gap: 5,
      }}
    >
      {answer}
    </div>
  );
};

export default DraggableAnswer;
