import React from "react";

const Cell = (props) => {
  let { clicked, value, active } = props;
  return (
    <div className={`game-cell ${active}`} onClick={clicked}>
      {value}
    </div>
  );
};

export default Cell;

//props trả về 1 object, có hai key là value, fn clicked
//Demo bên dưới
/*let props = {
  value: "X",
  clicked() {
    return this.value;
  },
}*/
