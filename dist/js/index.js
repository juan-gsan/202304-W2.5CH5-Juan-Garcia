import { createRandomBoard } from "./createRandomBoard.js";
import { countTokenStatus } from "./countTokenStatus.js";
import { printBoard } from "./printBoard.js";
import { playGameOfLife } from "./playGameOfLife.js";
import { paintBoard } from "./paintBoard.js";
import { createInitialBoard } from "./createInitialBoard.js";
import { paintUserBoard } from "./paintUserBoard.js";
import { paintResetBoard } from "./paintResetBoard.js";
let initialBoard = createInitialBoard(20, 20);
printBoard(initialBoard);
paintUserBoard(initialBoard);
const randomButton = document.querySelector(".main__buttons--random");
randomButton?.addEventListener("click", () => {
    const randomBoard = createRandomBoard(20, 20);
    paintBoard(randomBoard);
    if (initialBoard) {
        const playButton = document.querySelector(".main__buttons--start");
        playButton?.addEventListener("click", () => {
            const timer = () => {
                const count = setInterval(() => {
                    const aliveNeighbors = countTokenStatus(randomBoard);
                    playGameOfLife(randomBoard, aliveNeighbors);
                    paintBoard(randomBoard);
                }, 500);
                const stopButton = document.querySelector(".main__buttons--stop");
                stopButton?.addEventListener("click", () => {
                    clearInterval(count);
                });
            };
            timer();
        });
    }
});
const resetButton = document.querySelector(".main__buttons--reset");
resetButton?.addEventListener("click", () => {
    initialBoard = createInitialBoard(20, 20);
    paintResetBoard(initialBoard);
});
