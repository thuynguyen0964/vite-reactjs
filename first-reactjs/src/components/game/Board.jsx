import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="board-row">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          clicked={() => {
            props.handle(index);
          }}
          active={item === "X" ? "blue" : item === "O" ? "red" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
//Board có props là cells, handle (handle là một hàm)
