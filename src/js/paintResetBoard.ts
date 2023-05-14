export const paintResetBoard = (board: number[][]) => {
  const canvasBoard = document.querySelector(".main__board") as Element;

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const switchedToken = document.querySelector(
        `.row-${x}-col-${y}`
      ) as HTMLElement;
      switchedToken.classList.remove("alive");
      switchedToken.classList.add("dead");
      switchedToken.style.backgroundColor = "white";
    }
  }

  return canvasBoard;
};
