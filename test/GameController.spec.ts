import { expect } from "chai";
import GameController from "../js/GameController";
import PieceHolder from "../js/PieceHolder";
import { Color } from "../js/Color";
import Board from "../js/Board";
import GameState from "../js/GameState";
import { Bot } from "../js/Bot";

let testgc: GameController;

beforeEach(function() {
    let board : Board = new Board();
    let gameState = new GameState(board, Color.RED);
    testgc = new GameController(gameState);
    
  });

describe("GameController", () => {
    it("After initialize, rolledNumber of GameState should be 0.", () => {      
        expect(testgc.gameState.rolledNumber).to.equal(0);
     })
     it("When GC has been initialized, clickedPawnIndex should be 0", () => {

        expect(testgc.clickedPawnIndex).to.equal(0);
    })
    it("GameState's rolledNumber should be higher than 0 after calling rollDie", () => {
        testgc.rollDie();
        expect(testgc.gameState.rolledNumber).to.greaterThan(0);
    })

    it("After clicking on board to select a pawn, and selecting the first red pawn, it should be moved by the rolled die number", () => {
        let roll : number = testgc.gameState.rolledNumber;
        let testEvent = new MouseEvent("click", {clientX: 20, clientY: 220});
        testgc.checkIfOwnPawnIsClicked(testEvent);
        testgc.selectAndMovePawnAndMoveToNextTurn();
        expect(testgc.gameState.myBoard.squareArray[roll].occupyingPiece.color).to.equal(PieceHolder.RED.color);
    })

    it("When BLUE is the currentTurnColor, and we click on a yellow pawn, nothing should change in the gameState", () => {
        testgc.gameState.currentTurnColor = Color.BLUE;
        let testEvent = new MouseEvent("click", {clientX: 225, clientY: 525});
        let oldGS = testgc.gameState;
        testgc.checkIfOwnPawnIsClicked(testEvent);
        expect(testgc.gameState).to.equal(oldGS);
    })

    it("When GREEN's pawn is right before the final row, and we click on the pawn during GREEN's turn, green's final row should have a pawn on it.", () => {
        testgc.rollDie();
        testgc.gameState.currentTurnColor = Color.GREEN;    
        testgc.gameState.myBoard.squareArray[19].occupyingPiece = PieceHolder.GREEN;
        let testEvent = new MouseEvent("click", {clientX: 515, clientY: 275});
        testgc.checkIfOwnPawnIsClicked(testEvent);
        testgc.selectAndMovePawnAndMoveToNextTurn();
        expect(testgc.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(Color.GREEN)).to.equal(1);
    })
 });

