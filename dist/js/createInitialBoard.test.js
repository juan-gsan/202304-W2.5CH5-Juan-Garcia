import { createInitialBoard } from "./createInitialBoard.js";
describe("Given a createRandomBoard function", () => {
    describe("When it receives 3 and 3", () => {
        test("Then it should return [[0,0,0],[0,0,0],[0,0,0]]", () => {
            const numberOfRows = 3;
            const numberOfColumns = 3;
            const expectedOutput = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ];
            const actualOutput = createInitialBoard(numberOfRows, numberOfColumns);
            expect(actualOutput).toStrictEqual(expectedOutput);
        });
    });
});
