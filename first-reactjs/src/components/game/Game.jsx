import React, { useState } from "react";
import Board from "./Board";
import { CaculateWiner } from "../../helper";

const Game = () => {
  let [states, setStates] = useState({
    board: Array(9).fill(null),
    xISNext: true,
    name: "test",
  });

  let winner = CaculateWiner(states.board);
  let handleClick = (index) => {
    let boardCopy = [...states.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = states.xISNext ? "X" : "O";
    setStates({
      ...states,
      board: boardCopy,
      xISNext: !states.xISNext,
    });
  };

  const resetGame = () => {
    setStates({
      board: Array(9).fill(null),
      xISNext: true,
    });
  };
  return (
    <div className="game">
      <Board cells={states.board} handle={handleClick}></Board>
      <button className="game-reset" onClick={resetGame}>
        Play Again
      </button>
      <p className="game-winner">{winner ? `The winner is ${winner}` : ""}</p>
    </div>
  );
};

export default Game;

//board : [null, null, null, null, null, null, null, null, null]
//props của props : cells -> là mảng , dùng để lặp và map qua
