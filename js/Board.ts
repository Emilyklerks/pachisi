import { Color } from "./Color";
import ColouredSquare from "./ColouredSquare";
import PieceHolder from "./PieceHolder";
import Square from "./Square";

export default class Board {
    squareArray : Square[]= [];
    cornerSequence : String[] = [
        "E5", "N4", "E2", "S4", "E4", "S2", "W4", "S4", "W2", "N4", "W4", "N1"
    ];

    redSquareArray : ColouredSquare[] =[];
    blueSquareArray : ColouredSquare[] = [];
    greenSquareArray : ColouredSquare[] = [];
    yellowSquareArray : ColouredSquare[] = [];

    constructor() {
        this.fillSquareArray();
        this.fillColouredSquareArrays();
       // this.piecesOnBoard();       
    }

        fillSquareArray() {
            let x : number = -1;
            let y : number = 4;
            let currentCornerSequence = 0;
            
            for(var i = 0; i < 40; i++) {
                let dir = this.cornerSequence[currentCornerSequence];
    
                let dirLetter = dir.substr(0,1);
                let dirNumber : number = parseInt(dir.substr(1,1));
          
                if(dirLetter == 'E') {
                    x += 1;
                }
                if(dirLetter == 'N') {
                    y -= 1;
                }
                if(dirLetter == 'S') {
                    y += 1;
                }
                if(dirLetter == 'W') {
                    x -= 1;
                }
    
                dirNumber = dirNumber -1;
                this.cornerSequence[currentCornerSequence] = dirLetter + String(dirNumber);
                
                if (dirNumber <1 ) {
                    currentCornerSequence++;
                }
             
                this.squareArray[i] = new Square(PieceHolder.NONE, x*50,y*50, Color.NONE);
        }

        this.squareArray[0].isStartingSquareOfColor = Color.RED;
        this.squareArray[0].occupyingPiece = PieceHolder.RED;
        this.squareArray[39].isFinalSquareOfColor = Color.RED;

        this.squareArray[10].isStartingSquareOfColor = Color.BLUE;
        this.squareArray[10].occupyingPiece = PieceHolder.BLUE;
        this.squareArray[9].isFinalSquareOfColor = Color.BLUE;

        this.squareArray[20].isStartingSquareOfColor = Color.GREEN;
        this.squareArray[20].occupyingPiece = PieceHolder.GREEN;
        this.squareArray[19].isFinalSquareOfColor = Color.GREEN;

        this.squareArray[30].isStartingSquareOfColor= Color.YELLOW;
        this.squareArray[30].occupyingPiece= PieceHolder.YELLOW;
        this.squareArray[29].isFinalSquareOfColor= Color.YELLOW;
    }

    fillColouredSquareArrays() {
        //RED
        for (var i =0; i < 4; i++) {
            this.redSquareArray[i] = new ColouredSquare(PieceHolder.NONE,50 + i *50 ,5 * 50, Color.RED);
            this.blueSquareArray[i] = new ColouredSquare(PieceHolder.NONE,5 * 50 , 50 + i *50, Color.BLUE);
            this.greenSquareArray[i] = new ColouredSquare(PieceHolder.NONE,9*50 - i * 50, 5 * 50, Color.BLUE);
            this.yellowSquareArray[i] = new ColouredSquare(PieceHolder.NONE,5*50, 9 * 50 - i *50, Color.YELLOW);
        }
    }

    public getClickedSquareIndex(x: number, y: number): number {       
        for (var i = 0; i < this.squareArray.length; i++) {
            let s: Square = this.squareArray[i];
            if (x > s.xPos && x < s.xPos + 50 && y > s.yPos && y < s.yPos + 50) {
                return i;
            }
        }
        return 0;
    }

    public getNumberOfPawnsOnBoardOfColor(c : Color) {
        let count = 0;
        for (var i = 0; i < this.squareArray.length; i++) {
            let s: Square = this.squareArray[i];        
            if (s.occupyingPiece.color == c) {
                count ++;
            }
        }
        return count;
    }

    public getNumberOfPawnsOnEndRowOfColor(c: Color) {
        let arrayToCheck = [];
        if (c == Color.RED) arrayToCheck = this.redSquareArray;
        if (c == Color.BLUE) arrayToCheck = this.blueSquareArray;
        if (c == Color.GREEN) arrayToCheck = this.greenSquareArray;
        if (c == Color.YELLOW) arrayToCheck = this.yellowSquareArray;

        let count = 0;
        for (let i = 0; i < arrayToCheck.length; i++) {
            if(arrayToCheck[i].occupyingPiece == PieceHolder.returnPieceOfColor(c)) {
                count++;
            }
        }
        return count;
    }

    public getStartingSquareOfColor(c: Color) {
        if (c == Color.RED) return 0;
        if (c == Color.BLUE) return 10;
        if (c == Color.GREEN) return 20;
        if (c == Color.YELLOW) return 30;
    }

    public getFinalSquareOfColor(c: Color) {
        if (c == Color.RED) return 39;
        if (c == Color.BLUE) return 9;
        if (c == Color.GREEN) return 19;
        if (c == Color.YELLOW) return 29;
    }

    public getSquareArrayOfColor(c: Color) {
        if (c == Color.RED) return this.redSquareArray;
        if (c == Color.BLUE) return this.blueSquareArray;
        if (c == Color.GREEN) return this.greenSquareArray;
        if (c == Color.YELLOW) return this.yellowSquareArray;
    }
}