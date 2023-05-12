export const createInitialStatus = (board: []) => {
  for (let x: number = 0; x < board.length; x++) {
    for (let y: number = 0; y < board[x].length; y++) {
      board[x][y] = Math.round(Math.random());
    }
  }

  console.log(board);
};
