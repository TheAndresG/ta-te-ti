import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "18px",
  width: "258px",
  height: "250px",
  margin: 0,
  display: "grid",
  gridTemplate: "repeat(3,1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    <Square value={"1"} onClick={() => onClick("generico")} />
    <Square value={"2"} onClick={() => onClick("generico")} />
    <Square value={"3"} onClick={() => onClick("generico")} />
    <Square value={"4"} onClick={() => onClick("generico")} />
    <Square value={"5"} onClick={() => onClick("generico")} />
    <Square value={"6"} onClick={() => onClick("generico")} />
    <Square value={"7"} onClick={() => onClick("generico")} />
    <Square value={"8"} onClick={() => onClick("generico")} />
    <Square value={"9"} onClick={() => onClick("generico")} />
  </div>
);

export default Board;
