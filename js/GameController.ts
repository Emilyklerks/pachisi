import Board from "./Board";
import { Color } from "./Color";
import Piece from "./Piece";
import PieceHolder from "./PieceHolder";
import Square from "./Square";
import GameState from "./GameState";
import GameGUI from "./GameGUI";
import { Bot } from "./Bot";

export default class GameController {
    private mouseX;
    private mouseY;
    gameState : GameState;
    gameover : boolean;
    clickedPawnIndex : number = 0;
    
    constructor(gameState: GameState) {
        this.gameState = gameState;
    }
    
    public rollDie(): void{
        let roll = Math.floor(Math.random() * 6) + 1;
        if (roll == 6) {
            const totalPawns = this.gameState.myBoard.getNumberOfPawnsOnBoardOfColor(this.gameState.currentTurnColor) + this.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(this.gameState.currentTurnColor);
            if ( totalPawns < 4) {
                let startSquare = Board.getStartingSquareOfColor(this.gameState.currentTurnColor); 
                this.gameState.myBoard.squareArray[startSquare].occupyingPiece = PieceHolder.returnPieceOfColor(this.gameState.currentTurnColor);
            }
        }
        this.gameState.rolledNumber= roll;
    }

    public checkIfOwnPawnIsClicked(e): boolean {
        if (this.gameState.myBoard.isClickedSquareOfColor(e.clientX,e.clientY, this.gameState.currentTurnColor)) {
            this.assignPawnClick(this.gameState.myBoard.getClickedSquareIndex(e.clientX, e.clientY));
            return true;
        }
        return false;
    }

    public assignPawnClick(index) {
        this.clickedPawnIndex = index;
    }


    public selectAndMovePawnAndMoveToNextTurn(): void {
        const rolledPluscurrent = this.clickedPawnIndex + this.gameState.rolledNumber;
        const resultingPosition = rolledPluscurrent > 39 ?  rolledPluscurrent - 38 : rolledPluscurrent;

        if (Board.passedFinalSquareOfColor(this.gameState.currentTurnColor, this.clickedPawnIndex, this.gameState.rolledNumber)) {
            this.movePawnToFinalRow();
        } else {
           this.movePawn(resultingPosition);
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
        if (this.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(this.gameState.currentTurnColor) == 4) {
            alert(Color[this.gameState.currentTurnColor] + "won!");
        } else {
            this.gameState.currentTurnColor = this.gameState.currentTurnColor == 3 ? 0 : this.gameState.currentTurnColor + 1;
            this.rollDie();
        }
    }
}

