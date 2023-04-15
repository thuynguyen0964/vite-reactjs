function CaculateWiner(cells) {
  let lineWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lineWin.length; index++) {
    let [a, b, c] = lineWin[index];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export { CaculateWiner };

//Nếu có cells[a] và cells[a] === cells[b], cells[a] === cells[c]
//-> cùng nằm trên 1 hàng thì return cells[a]
//lineWiner mục đích là index thôi
//Truyền mảng cell vào, dựa theo index là [a,b,c] để tính toán
//let cell = [null, null, null, "X", "X", "X", null, null, null];
//với cell như trên thì sẽ lọt vào [a,b,c] = [3,4,5] => cell[a] = X, cell[b] =X, cell[c] = X
//=> thỏa điều kiện đề ra
