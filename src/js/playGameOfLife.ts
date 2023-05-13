import { countTokenStatus } from "./countTokenStatus.js";
import { createBoard } from "./createBoard.js";
export const playGameOfLife = () => {
  const board = createBoard(3, 3);
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === 1 && countTokenStatus(board) < 2) {
        board[y][x] = 0;
      }

      if (board[y][x] === 1 && countTokenStatus(board) > 3) {
        board[y][x] = 0;
      }

      if (board[y][x] === 0 && countTokenStatus(board) === 3) {
        board[y][x] = 1;
      }
    }
  }
};
