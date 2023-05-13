import { createRandomBoard } from "./createRandomBoard.js";

export const printBoard = () => {
  let consoleOutput: string = "";

  // Let randomBoard: boolean;
  // if (!randomBoard) {
  //   const board = createInitialBoard(3);
  // }

  const randomBoard = createRandomBoard(50, 50);

  for (let y = 0; y < randomBoard.length; y++) {
    consoleOutput = randomBoard[y].join(" ");
    consoleOutput += "\n";
    console.log(consoleOutput);
  }
};

printBoard();
