import { expect } from "chai";

import Board from "../js/Board";
import GameController from "../js/GameController";
import { Color } from "../js/Color";
import PieceHolder from "../js/PieceHolder";

let testBoard;

before(function() {
    testBoard = new Board();
  });

describe("Board", () => {
    it("Should return the redSquareArray when using getSquaraArrayOfColor(RED)", () => {
        
        expect(testBoard.getSquareArrayOfColor(Color.RED)).to.equal(testBoard.redSquareArray);
    })
});

describe("Board", () => {
    it("getNumberOfPawnsOnEndRowOfColor(RED) should return 0 with a newly initialized board", () => {
        expect(testBoard.getNumberOfPawnsOnEndRowOfColor(Color.RED)).to.equal(0);
    })
});

describe("Board", () => {
    it("getNumberOfPawnsOnEndRowOfColor(BLUE) should return 2 when two BLUE pawns are placed on the end row", () => {
        testBoard.blueSquareArray[0].occupyingPiece = PieceHolder.BLUE;
        testBoard.blueSquareArray[1].occupyingPiece = PieceHolder.BLUE;
        expect(testBoard.getNumberOfPawnsOnEndRowOfColor(Color.BLUE)).to.equal(2);
    })
});

describe("Board", () => {
    it("getClickedSquareIndex should return -1 when clicking outside of a square", () => {
        expect(testBoard.getClickedSquareIndex(10,10)).to.equal(-1);
    })
});

describe("Board", () => {
    it("getClickedSquareIndex should return 0 when clicking 32, 224", () => {
        expect(testBoard.getClickedSquareIndex(32,224)).to.equal(0);
    })
});

describe("Board", () => {
    it("getClickedSquareIndex should return 26 when clicking 332, 437", () => {
        expect(testBoard.getClickedSquareIndex(332,437)).to.equal(26);
    })
});

