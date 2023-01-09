import { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const style = {
  width: "208px",
  margin: "28px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isNext, setIsNext] = useState(true);

  const winner = calculateWinner(board);
  console.log(winner);

  const handleClick = (i) => {
    const copyBoard = [...board];
    if (winner || copyBoard[i]) return;
    copyBoard[i] = isNext ? "X" : "O";
    setBoard(copyBoard);
    setIsNext(!isNext);
  };
  const renderMoves = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />;
      <div style={style}>
        <p>
          {winner ? `Winner ${winner} ` : `Next player ${isNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
