export const playGameOfLife = (board, aliveTokens) => {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === 1 && aliveTokens < 2) {
        board[y][x] = 0;
      }

      if (board[y][x] === 1 && aliveTokens > 3) {
        board[y][x] = 0;
      }

      if (board[y][x] === 0 && aliveTokens === 3) {
        board[y][x] = 1;
      }
    }
  }

  return board;
};
