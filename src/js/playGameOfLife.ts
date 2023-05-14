import { countTokenStatus } from "./countTokenStatus.js";
import { playFirstRound } from "./playFirstRound.js";

export const playGameOfLife = (board = playFirstRound()) => {
  const aliveNeighbors = countTokenStatus(board);

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {}
  }

  let consoleOutput = "";
  for (let y = 0; y < board.length; y++) {
    consoleOutput = board[y].join(" ");
    consoleOutput += "\n";
    console.log(consoleOutput);
  }

  return board;
};
