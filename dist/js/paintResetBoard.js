export const paintResetBoard = (board) => {
    const canvasBoard = document.querySelector(".main__board");
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const switchedToken = document.querySelector(`.row-${x}-col-${y}`);
            switchedToken.classList.remove("alive");
            switchedToken.classList.add("dead");
            switchedToken.style.backgroundColor = "white";
        }
    }
    return canvasBoard;
};
