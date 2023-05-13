import { createBoard } from "./createRandomBoard";

export const countTokenStatus = () => {
  const board = createBoard(3, 3);
  let aliveTokens: number = 0;

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[x][y] === 1) {
        aliveTokens += 1;
      }
    }
  }

  return aliveTokens;
};
