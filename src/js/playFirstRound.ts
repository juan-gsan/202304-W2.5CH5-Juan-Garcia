import { countTokenStatus } from "./countTokenStatus.js";
import { printBoard } from "./printBoard.js";
export const playFirstRound = () => {
  const board = printBoard();
  const aliveNeighbors = countTokenStatus(board);

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[1][1] === 1) {
        if (aliveNeighbors < 3 || aliveNeighbors > 4) {
          board[1][1] = 0;
        }
      }

      if (board[1][1] === 0) {
        if (aliveNeighbors === 3) {
          board[1][1] = 1;
        }
      }
    }
  }

  let consoleOutput = "";
  for (let y = 0; y < board.length; y++) {
    consoleOutput = board[y].join(" ");
    consoleOutput += "\n";
    console.log(consoleOutput);
  }

  return board;
};
