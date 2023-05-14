export const printBoard = (board) => {
    const canvasBoard = document.querySelector(".main__board");
    for (let x = 0; x < board.length; x++) {
        const tokenRow = document.createElement("div");
        tokenRow.setAttribute("class", "row");
        tokenRow.classList.add("row-" + x);
        canvasBoard.append(tokenRow);
        for (let y = 0; y < board[x].length; y++) {
            const boardToken = document.createElement("div");
            boardToken.setAttribute("class", "row-" + x + "-col-" + y);
            tokenRow.append(boardToken);
            if (board[x][y] === 0) {
                boardToken.classList.add("dead");
                boardToken.style.backgroundColor = "white";
            }
            if (board[x][y] === 1) {
                boardToken.classList.add("alive");
                boardToken.style.backgroundColor = "black";
            }
        }
    }
    return canvasBoard;
};
