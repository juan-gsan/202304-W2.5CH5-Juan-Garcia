import { playGameOfLife } from "./playGameOfLife.js";

export const timer = () => {
  setTimeout(() => {
    playGameOfLife();
  }, 1000);
};
