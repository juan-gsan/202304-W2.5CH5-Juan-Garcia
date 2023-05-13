import { createRandomBoard } from "./createRandomBoard.js";

export const printBoard = () => {
  let consoleOutput: string = "";

  // Let randomBoard: boolean;
  // if (!randomBoard) {
  //   const board = createInitialBoard(3);
  // }

  const randomBoard = createRandomBoard(5, 5);

  for (let y = 0; y < randomBoard.length; y++) {
    consoleOutput = randomBoard[y];
    consoleOutput += "\n";
    console.log(consoleOutput);
    for (let x = 0; x < randomBoard[y].length; x++) {
      consoleOutput
        .replaceAll(",", " ")
        .replaceAll("[", "")
        .replaceAll("]", "");
    }
  }
};

printBoard();
