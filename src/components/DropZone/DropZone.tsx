import { useDrop } from "react-dnd";

const DropZone = ({ onDrop, children }: any) => {
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

  const backgroundColor = isOver && canDrop ? "lightgreen" : "transparent";

  return (
    <span
      ref={drop}
      style={{
        backgroundColor,
      }}
    >
      {children}
    </span>
  );
};

export default DropZone;
