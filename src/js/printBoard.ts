export const printBoard = (board) => {
  let consoleOutput = "";

  for (let x = 0; x < board.length; x++) {
    consoleOutput = board[x];
    consoleOutput = board[x].join(" ");
    consoleOutput += "\n";

    console.log(consoleOutput);
  }
  // For (let y = 0; y < randomBoard.length; y++) {
  //   consoleOutput = randomBoard[y].join(" ");
  //   consoleOutput += "\n";
  //   console.log(consoleOutput);
  // }

  // const canvasBoard = document.querySelector(".main__board");

  // for (let y = 0; y < board.length; y++) {
  //   for (let x = 0; x < board[y].length; x++) {
  //     const boardToken = document.createElement("div");
  //     canvasBoard?.append(boardToken);

  //     if (board[y][x] === 0) {
  //       boardToken.setAttribute("class", "dead");
  //       boardToken.textContent = "X";
  //     }

  //     if (board[y][x] === 1) {
  //       boardToken.setAttribute("class", "alive");
  //       boardToken.textContent = "O";
  //     }

  //     boardToken.classList.add(y + "-" + x);
  //   }
  // }

  // return canvasBoard;

  return consoleOutput;
};
