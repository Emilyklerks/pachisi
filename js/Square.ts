import { Color } from "./Color";
import Piece from "./Piece";

export default class Square {
    isStartingSquareOfColor : Color;
    occupyingPiece : Piece;
    xPos : number;
    yPos : number;
    isFinalSquareOfColor : Color;  

    constructor(myPiece : Piece, x : number, y: number, startColor : Color) {
        this.occupyingPiece = myPiece;
        this.xPos = x;
        this.yPos = y;
        this.isStartingSquareOfColor = startColor;

    }  
}
