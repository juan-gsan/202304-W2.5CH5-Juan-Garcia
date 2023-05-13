import { createRandomBoard } from "./createRandomBoard.js";

export const printBoard = () => {
  let consoleOutput = "";

  // Let randomBoard: boolean;
  // if (!randomBoard) {
  //   const board = createInitialBoard(3);
  // }

  const randomBoard = createRandomBoard(3, 3);

  for (let y = 0; y < randomBoard.length; y++) {
    consoleOutput = randomBoard[y].join(" ");
    consoleOutput += "\n";
    console.log(consoleOutput);
  }

  return consoleOutput;
};
