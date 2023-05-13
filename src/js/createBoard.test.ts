import { createBoard } from "./createBoard";

describe("Given a createBoard function", () => {
  describe("When it receives 5 and 5", () => {
    test("Then it should return a 5x5 array matrix within an array", () => {
      const numberOfRows = 5;
      const numberOfColumns = 5;
      const expectedLength = 5;

      const actualOutput = createBoard(numberOfRows, numberOfColumns);

      expect(actualOutput).toHaveLength(expectedLength);
    });
  });
});
