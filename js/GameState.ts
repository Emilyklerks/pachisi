import Board from "./Board";
import { Color } from "./Color";
import Piece from "./Piece";
import PieceHolder from "./PieceHolder";
import Square from "./Square";

export default class GameState {
    myBoard : Board;
    currentTurnColor : Color;
    dieRolled : boolean;
    rolledNumber: number;
    readonly NR_OF_SQUARES_IN_BOARD = 39;

    constructor (newBoard : Board, newTurnColor : Color, isDieRolled = false, newRolledNumber = 0) {
        this.myBoard = newBoard;
        this.currentTurnColor = newTurnColor;
        this.dieRolled = isDieRolled;
        this.rolledNumber = newRolledNumber;
    }
}