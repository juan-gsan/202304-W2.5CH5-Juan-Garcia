import { createRandomBoard } from "./createRandomBoard.js";

export const printBoard = () => {
  // Let consoleOutput = "";

  const randomBoard = createRandomBoard(3, 3);

  // For (let y = 0; y < randomBoard.length; y++) {
  //   consoleOutput = randomBoard[y].join(" ");
  //   consoleOutput += "\n";
  //   console.log(consoleOutput);
  // }

  const canvasBoard = document.querySelector(".main__board");

  for (let y = 0; y < randomBoard.length; y++) {
    for (let x = 0; x < randomBoard[y].length; x++) {
      const boardToken = document.createElement("div");
      canvasBoard?.append(boardToken);

      if (randomBoard[y][x] === 0) {
        boardToken.setAttribute("class", "dead");
        boardToken.textContent = "X";
      }

      if (randomBoard[y][x] === 1) {
        boardToken.setAttribute("class", "alive");
        boardToken.textContent = "O";
      }

      boardToken.classList.add(y + "-" + x);
    }
  }

  return randomBoard;
};
