import Board from "./Board";
import { Color } from "./Color";
import Piece from "./Piece";
import PieceHolder from "./PieceHolder";
import Square from "./Square";
import GameState from "./GameState";
import GameGUI from "./GameGUI";

export default class GameController {
    mouseX;
    mouseY;
    gameState : GameState;
    gameStateArray : GameState[];
    gameover : boolean;
    clickedPawnIndex : number;
    myGameGUI : GameGUI;

    constructor() {
        this.clickedPawnIndex = 0;
    }

    public initialize(): void {
        let board : Board = new Board();
        this.gameState = new GameState(board, Color.RED);
    }

    public iterateTurns(): void {
        this.myGameGUI.drawGameState(this.gameState);
        this.rollDie();
        this.myGameGUI.drawGameState(this.gameState);
    }

    private rollDie(): void{
        let roll = Math.floor(Math.random() * 6) + 1;
        if (roll == 6) {
            if (this.gameState.myBoard.getNumberOfPawnsOnBoardOfColor(this.gameState.currentTurnColor) < 4) {
                let startSquare = Board.getStartingSquareOfColor(this.gameState.currentTurnColor); 
                this.gameState.myBoard.squareArray[startSquare].occupyingPiece = PieceHolder.returnPieceOfColor(this.gameState.currentTurnColor);
            }
        }
        this.gameState = new GameState(this.gameState.myBoard,this.gameState.currentTurnColor, true, roll);
    }

    private selectPawn(): void {
        const rolledPluscurrent = this.clickedPawnIndex + this.gameState.rolledNumber;
        const resultingPosition = rolledPluscurrent > 39 ?  rolledPluscurrent - 39 : rolledPluscurrent;

        if (Board.passedFinalSquareOfColor(this.gameState.currentTurnColor, this.clickedPawnIndex, this.gameState.rolledNumber)) {
            this.movePawnToFinalRow();
        } else {
           this.movePawn(resultingPosition);
        }
    }

    public clickOnBoardToChoosePawn(e) : void {   
        this.mouseX = e.clientX - 10;
        this.mouseY = e.clientY - 10;
        let clickedSquareIndex = this.gameState.myBoard.getClickedSquareIndex(this.mouseX, this.mouseY);
        let clickedPiece : Piece = this.gameState.myBoard.squareArray[clickedSquareIndex].occupyingPiece;

        if (clickedPiece.color === this.gameState.currentTurnColor) {       
            this.clickedPawnIndex = clickedSquareIndex;   
            this.selectPawn();       
        }
    }

    private movePawn(resultPos : number): void {
        if (this.gameState.myBoard.squareArray[resultPos].occupyingPiece.color == this.gameState.currentTurnColor) {
            alert("You can't move your pawn to land on one of your own pawns.")
        } else {
            this.gameState.myBoard.squareArray[this.clickedPawnIndex].occupyingPiece = PieceHolder.NONE;
            this.gameState.myBoard.squareArray[resultPos].occupyingPiece = PieceHolder.returnPieceOfColor(this.gameState.currentTurnColor);
            this.moveToNextTurn();        
        }
    }
   
    private movePawnToFinalRow(): void {
        let c = this.gameState.currentTurnColor;
        let finalRow = this.gameState.myBoard.getSquareArrayOfColor(c);
        let firstFreeSpotOnFinalRow = 3 - this.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(c);
        this.gameState.myBoard.squareArray[this.clickedPawnIndex].occupyingPiece = PieceHolder.NONE;
        this.gameState.myBoard.getSquareArrayOfColor(c)[firstFreeSpotOnFinalRow].occupyingPiece = PieceHolder.returnPieceOfColor(c);
        this.moveToNextTurn();
    }

    public moveToNextTurn() {
        this.gameState.currentTurnColor = this.gameState.currentTurnColor == 3 ? 0 : this.gameState.currentTurnColor + 1;
        this.iterateTurns();
    }
}

