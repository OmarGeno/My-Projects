import React from "react";
import { useState } from "react";

function Square({ value, onClick }) {
  return (
    <div className="cell" onClick={onClick}>
      {value}
    </div>
  );
}

export default function GameContainer() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const clickHandle = (i) => {
    if (setWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  };

  const winner = setWinner(squares);
  let status;
  if (winner) {
    status = `The winner is ${!isX ? "Player 1" : "Player 2"}`;
  } 
  else {
    status = `Current player ${isX ? "Player 1" : "Player 2"}`;
  }

  const restart = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => clickHandle(i)} />;
  };

  return (
    <>
      <h4>Start to play</h4> <br />
      <div className="game-container">
        <div className="cell-container">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>{" "}
        <br />
        <div className="players">
          <div
            className="info"
            style={{ color: `${winner ? "rgb(247, 175, 247)" : ""}` }}
          >
            {status}
          </div>
        </div>
        <button className="btn btn-info" onClick={restart}>
          Restart Game
        </button>{" "}
        <br />
      </div>
    </>
  );
}
function setWinner(squares) {
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCondition.length; i++) {
    const [a, b, c] = winCondition[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
