/* eslint-disable complexity */
export const countTokenStatus = (board: number[][]) => {
  const aliveTokensBoard = [];

  for (let x = 0; x < board.length; x++) {
    const tokensAround = [];
    for (let y = 0; y < board[x].length; y++) {
      let aliveTokens: number = 0;
      if (board[x - 1] && board[x - 1][y - 1] && board[x - 1][y - 1] === 1) {
        aliveTokens += 1;
      }

      if (board[x - 1] && board[x - 1][y] && board[x - 1][y] === 1) {
        aliveTokens += 1;
      }

      if (board[x - 1] && board[x - 1][y + 1] && board[x - 1][y + 1] === 1) {
        aliveTokens += 1;
      }

      if (board[x][y - 1] && board[x][y - 1] === 1) {
        aliveTokens += 1;
      }

      if (board[x][y + 1] && board[x][y + 1] === 1) {
        aliveTokens += 1;
      }

      if (board[x + 1] && board[x + 1][y - 1] && board[x + 1][y - 1] === 1) {
        aliveTokens += 1;
      }

      if (board[x + 1] && board[x + 1][y] && board[x + 1][y] === 1) {
        aliveTokens += 1;
      }

      if (board[x + 1] && board[x + 1][y + 1] && board[x + 1][y + 1] === 1) {
        aliveTokens += 1;
      }

      tokensAround.push(aliveTokens);
    }

    aliveTokensBoard.push(tokensAround);
  }

  return aliveTokensBoard;
};
