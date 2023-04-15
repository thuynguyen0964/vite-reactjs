import React, { useState, useReducer } from "react";
import Board from "./Board";
import { CaculateWiner } from "../../helper";

let initialState = {
  board: Array(9).fill(null),
  xISNext: true,
};

const gemReduce = (state, action) => {
  switch (action.type) {
    case "CLICK":
      console.log("da nhan");
      break;

    default:
      break;
  }
  return state;
};

const ReducerGame = (index) => {
  let [states, dispatch] = useReducer(gemReduce, initialState);
  // let [states, setStates] = useState({
  //   board: Array(9).fill(null),
  //   xISNext: true,
  //   name: "test",
  // });

  let winner = CaculateWiner(states.board);
  let handleClick = (index) => {
    let boardCopy = [...states.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = states.xISNext ? "X" : "O";

    dispatch({
      type: "CLICK",
      payload: {
        index,
      },
    });
    // setStates({
    //   ...states,
    //   board: boardCopy,
    //   xISNext: !states.xISNext,
    // });
  };

  const resetGame = () => {
    // setStates({
    //   board: Array(9).fill(null),
    //   xISNext: true,
    // });
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

export default ReducerGame;
