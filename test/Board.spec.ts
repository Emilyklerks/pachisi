import { expect } from "chai";

import Board from "../js/Board";
import { Color } from "../js/Color";

describe("Board", () => {
    it("Does stuff", () => {
        const board = new Board();
        expect(board.getSquareArrayOfColor(Color.RED)).to.equal(board.redSquareArray);
    })
});