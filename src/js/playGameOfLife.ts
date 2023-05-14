export const playGameOfLife = (
  board: number[][],
  aliveNeighbors: number[][]
) => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const checkedToken = document.querySelector(
        `.row-${x}-col-${y}`
      ) as Element;
      if (board[x][y] === 1 && aliveNeighbors[x][y] < 2) {
        board[x][y] = 0;
        checkedToken?.classList.remove("alive");
        checkedToken?.classList.add("dead");
      }

      if (board[x][y] === 1 && aliveNeighbors[x][y] > 3) {
        board[x][y] = 0;
        checkedToken?.classList.remove("alive");
        checkedToken?.classList.add("dead");
      }

      if (board[x][y] === 0 && aliveNeighbors[x][y] === 3) {
        board[x][y] = 1;
        checkedToken?.classList.remove("dead");
        checkedToken?.classList.add("alive");
      }
    }
  }

  return board;
};
