import { createRandomBoard } from "./createRandomBoard.js";
import { countTokenStatus } from "./countTokenStatus.js";
import { printBoard } from "./printBoard.js";
import { playGameOfLife } from "./playGameOfLife.js";

const randomBoard = createRandomBoard(5, 5);

const timer = () => {
  setInterval(() => {
    console.clear();
    printBoard(randomBoard);
    const aliveNeighbors = countTokenStatus(randomBoard);
    playGameOfLife(randomBoard, aliveNeighbors);
  }, 1000);
};

timer();
