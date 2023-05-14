export const paintUserBoard = (board) => {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const tokenButton = document.querySelector(`.row-${x}-col-${y}`);
            tokenButton.addEventListener("click", () => {
                tokenButton.classList.remove("dead");
                tokenButton.classList.add("alive");
                tokenButton.style.backgroundColor = "black";
            });
        }
    }
};
