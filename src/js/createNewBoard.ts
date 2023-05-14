export const createNewBoard = (rows: number) => {
  const newBoard = [];

  for (let y: number = 0; y < rows; y++) {
    const row: [] = [];
    newBoard.push(row);
  }

  console.log(newBoard);
  return newBoard;
};

createNewBoard(5);
