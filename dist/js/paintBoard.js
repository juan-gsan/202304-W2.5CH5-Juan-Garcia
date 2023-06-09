export const paintBoard = (board) => {
    const canvasBoard = document.querySelector(".main__board");
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const switchedToken = document.querySelector(`.row-${x}-col-${y}`);
            if (board[x][y] === 0) {
                switchedToken.style.backgroundColor = "white";
            }
            if (board[x][y] === 1) {
                switchedToken.style.backgroundColor = "black";
            }
        }
    }
    return canvasBoard;
};
