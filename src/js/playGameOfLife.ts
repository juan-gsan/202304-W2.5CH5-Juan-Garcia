import { countTokenStatus } from "./countTokenStatus.js";
import { createRandomBoard } from "./createRandomBoard.js";
import { printBoard } from "./printBoard.js";
export const playGameOfLife = () => {
  const consoleBoard = printBoard();
  const board = createRandomBoard(3, 3);
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

  console.log(consoleBoard);
  return board;
};
