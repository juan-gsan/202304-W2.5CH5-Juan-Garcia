export const playGameOfLife = (board, aliveTokens) => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 1 && aliveTokens[x][y] < 2) {
        board[x][y] = 0;
      }

      if (board[x][y] === 1 && aliveTokens[x][y] > 3) {
        board[x][y] = 0;
      }

      if (board[x][y] === 0 && aliveTokens[x][y] === 3) {
        board[x][y] = 1;
      }
    }
  }

  return board;
};
