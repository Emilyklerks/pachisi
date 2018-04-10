import { Color } from "./Color";
import Square from "./Square";
import Piece from "./Piece";

export default class ColouredSquare extends Square {
    myColor: Color; 

    constructor(myPiece : Piece, x : number, y: number, myCol : Color) {
        super(myPiece, x , y, myCol);
        this.myColor = myCol;
    }
}
