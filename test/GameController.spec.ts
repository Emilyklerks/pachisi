import { expect } from "chai";
import GameController from "../js/GameController";
import PieceHolder from "../js/PieceHolder";
import { Color } from "../js/Color";
import Board from "../js/Board";

let testgc: GameController;

before(function() {
    testgc = new GameController();
    testgc.initialize();
  });

describe("GameController", () => {
    it("After initialize, rolledNumber of GameState should be 0.", () => {       
         expect(testgc.gameState.rolledNumber).to.equal(0);
     })
 });

 describe("GameController", () => {
    it("When GC has been initialized, clickedPawnIndex should be 0", () => {
         expect(testgc.clickedPawnIndex).to.equal(0);
     })
 });

 describe("GameController", () => { 
    it("GameState's rolledNumber should be higher than 0 after calling rollDie", () => {
        testgc.rollDie();
        expect(testgc.gameState.rolledNumber).to.greaterThan(0);
     })
 });

 describe("GameController", () => { 
    it("After clicking on board to select a pawn, and selecting the first red pawn, the first square on the board should be empty", () => {
        testgc.rollDie();
        let testEvent = new MouseEvent("click", {clientX: 20, clientY: 220});
        testgc.clickOnBoardToChoosePawn(testEvent);
        expect(testgc.gameState.myBoard.squareArray[0].occupyingPiece).to.equal(PieceHolder.NONE);
     })
 });

 describe("GameController", () => { 
    it("When BLUE is the currentTurnColor, and we click on a yellow pawn, nothing should change in the gameState", () => {
        testgc.gameState.currentTurnColor = Color.BLUE;
        testgc.rollDie();
        let testEvent = new MouseEvent("click", {clientX: 225, clientY: 525});
        let oldGS = testgc.gameState;
        testgc.clickOnBoardToChoosePawn(testEvent);
        expect(testgc.gameState).to.equal(oldGS);
     })
 });

 describe("GameController", () => { 
    it("When GREEN's pawn is right before the final row, and we click on the pawn during GREEN's turn, green's final row should have a pawn on it.", () => {
        testgc.gameState.currentTurnColor = Color.GREEN;
        testgc.rollDie();
        testgc.gameState.myBoard.squareArray[19].occupyingPiece = PieceHolder.GREEN;
        let testEvent = new MouseEvent("click", {clientX: 515, clientY: 275});
        testgc.clickOnBoardToChoosePawn(testEvent);
        expect(testgc.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(Color.GREEN)).to.equal(1);
     })
 });