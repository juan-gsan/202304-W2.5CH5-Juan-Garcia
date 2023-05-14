export const countTokenStatus = (board, row, column) => {
  let aliveTokens = 0;
  const y = Number(row);
  const x = Number(column);

  if (y - 1 >= 0) {
    if (board[y - 1][x] === 1) {
      aliveTokens++;
    }
  }

  if (y - 1 >= 0 && x - 1 >= 0) {
    if (board[y - 1][x - 1] === 1) {
      aliveTokens++;
    }
  }

  if (y - 1 >= 0 && x + 1 < x) {
    if (board[y - 1][x + 1] === 1) {
      aliveTokens++;
    }
  }

  return aliveTokens;
};
