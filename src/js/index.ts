import { createRandomBoard } from "./createRandomBoard.js";
import { countTokenStatus } from "./countTokenStatus.js";
import { printBoard } from "./printBoard.js";
import { playGameOfLife } from "./playGameOfLife.js";
import { paintBoard } from "./paintBoard.js";

const randomBoard = createRandomBoard(20, 20);
printBoard(randomBoard);

const playButton = document.querySelector(".main__buttons--start");
playButton?.addEventListener("click", () => {
  const timer = () => {
    setInterval(() => {
      const aliveNeighbors = countTokenStatus(randomBoard);
      playGameOfLife(randomBoard, aliveNeighbors);
      paintBoard(randomBoard);
    }, 500);
  };

  timer();
});
