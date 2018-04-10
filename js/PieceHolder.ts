 import { Color } from "./Color";
 import Piece from "./Piece";
 
 export default class PieceHolder {
     static BLUE : Piece = new Piece("blue", Color.BLUE,1);
     static RED : Piece = new Piece("red", Color.RED,1);
     static YELLOW : Piece = new Piece("yellow", Color.YELLOW, 1);
     static GREEN : Piece = new Piece("green", Color.GREEN, 1);
     static NONE : Piece = new Piece("white", Color.NONE, 0);

     public static returnPieceOfColor(c: Color) {
         if (c==Color.BLUE) {
             return this.BLUE;
         }
         if (c==Color.RED) {
            return this.RED;
        }
        if (c==Color.GREEN) {
            return this.GREEN;
        }
        if (c==Color.YELLOW) {
            return this.YELLOW;
        }
     }
}