import { createRandomBoard } from "./createRandomBoard.js";
import { countTokenStatus } from "./countTokenStatus.js";
import { printBoard } from "./printBoard.js";
import { playGameOfLife } from "./playGameOfLife.js";

const randomBoard = createRandomBoard(10, 10);
printBoard(randomBoard);

// Const timer = () => {
//   setInterval(() => {
//     console.clear();
//     const aliveNeighbors = countTokenStatus(randomBoard);
//     playGameOfLife(randomBoard, aliveNeighbors);
//     // PrintBoard(randomBoard);
//   }, 1000);
// };

// timer();
