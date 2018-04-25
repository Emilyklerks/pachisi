import { Color } from "./Color";
import ColouredSquare from "./ColouredSquare";
import PieceHolder from "./PieceHolder";
import Square from "./Square";
import Piece from "./Piece";

export default class Board {
    squareArray : Square[]= [];
    private readonly CORNER_SEQUENCE : String[] = [
        "E5", "N4", "E2", "S4", "E4", "S2", "W4", "S4", "W2", "N4", "W4", "N1"
    ];

    redSquareArray : ColouredSquare[] =[];
    blueSquareArray : ColouredSquare[] = [];
    greenSquareArray : ColouredSquare[] = [];
    yellowSquareArray : ColouredSquare[] = [];

    readonly RED_START: number = 0;
    readonly RED_FINAL: number = 39;
    readonly BLUE_START: number = 10;
    readonly BLUE_FINAL: number = 9;
    readonly GREEN_START : number = 20;
    readonly GREEN_FINAL : number = 19;
    readonly YELLOW_START : number = 30;
    readonly YELLOW_FINAL : number = 29;

    readonly SQUARE_SIZE : number = 50;


    constructor() {
        this.fillSquareArray();
        this.fillColouredSquareArrays();       
    }

    private fillSquareArray() {
            let x : number = -1;
            let y : number = 4;
            let currentCornerSequence = 0;
            
            for(var i = 0; i < 40; i++) {
                let dir = this.CORNER_SEQUENCE[currentCornerSequence];
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
                this.CORNER_SEQUENCE[currentCornerSequence] = dirLetter + String(dirNumber);
                
                if (dirNumber <1 ) {
                    currentCornerSequence++;
                }
             
                this.squareArray[i] = new Square(PieceHolder.NONE, x*this.SQUARE_SIZE, y*this.SQUARE_SIZE, Color.NONE);
        }

        this.squareArray[this.RED_START].isStartingSquareOfColor = Color.RED;
        this.squareArray[this.RED_START].occupyingPiece = PieceHolder.RED;
        this.squareArray[this.RED_FINAL].isFinalSquareOfColor = Color.RED;

        this.squareArray[this.BLUE_START].isStartingSquareOfColor = Color.BLUE;
        this.squareArray[this.BLUE_START].occupyingPiece = PieceHolder.BLUE;
        this.squareArray[this.BLUE_FINAL].isFinalSquareOfColor = Color.BLUE;

        this.squareArray[this.GREEN_START].isStartingSquareOfColor = Color.GREEN;
        this.squareArray[this.GREEN_START].occupyingPiece = PieceHolder.GREEN;
        this.squareArray[this.GREEN_FINAL].isFinalSquareOfColor = Color.GREEN;

        this.squareArray[this.YELLOW_START].isStartingSquareOfColor = Color.YELLOW;
        this.squareArray[this.YELLOW_START].occupyingPiece = PieceHolder.YELLOW;
        this.squareArray[this.YELLOW_FINAL].isFinalSquareOfColor = Color.YELLOW;
    }

    private fillColouredSquareArrays() {
        for (var i =0; i < 4; i++) {
            this.redSquareArray[i] = new ColouredSquare(PieceHolder.NONE, this.SQUARE_SIZE + i * this.SQUARE_SIZE ,5 * this.SQUARE_SIZE, Color.RED);
            this.blueSquareArray[i] = new ColouredSquare(PieceHolder.NONE,5 * this.SQUARE_SIZE , 50 + i *this.SQUARE_SIZE, Color.BLUE);
            this.greenSquareArray[i] = new ColouredSquare(PieceHolder.NONE,9*this.SQUARE_SIZE - i * this.SQUARE_SIZE, 5 * this.SQUARE_SIZE, Color.BLUE);
            this.yellowSquareArray[i] = new ColouredSquare(PieceHolder.NONE, 5*this.SQUARE_SIZE, 9 * 50 - i *this.SQUARE_SIZE, Color.YELLOW);
        }

        this.redSquareArray[3].occupyingPiece = PieceHolder.RED;
        this.redSquareArray[1].occupyingPiece = PieceHolder.RED;
        this.redSquareArray[2].occupyingPiece = PieceHolder.RED;
    }

    public getClickedSquareIndex(x: number, y: number): number {       
        for (var i = 0; i < this.squareArray.length; i++) {
            let s: Square = this.squareArray[i];
            if (x > s.xPos && x < s.xPos + this.SQUARE_SIZE && y > s.yPos && y < s.yPos + this.SQUARE_SIZE) {
                return i;
            }
        }
        return -1;
    }

    public isClickedSquareOfColor(x: number, y: number, c: Color): boolean {
        let clickedPiece : Piece = PieceHolder.NONE;       
        for (var i = 0; i < this.squareArray.length; i++) {
            let s: Square = this.squareArray[i];
            if (x > s.xPos && x < s.xPos + this.SQUARE_SIZE && y > s.yPos && y < s.yPos + this.SQUARE_SIZE) {
                clickedPiece = this.squareArray[i].occupyingPiece;
            }
        }
        if(clickedPiece.color === c) {
            return true;
        } else {
            return false;
        }
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

    public getIndicesPawnsOnBoardOfColor(c : Color): number[] {
        let pawns = new Array();
        for (var i = 0; i < this.squareArray.length; i++) {
            let s: Square = this.squareArray[i];   
            if (s.occupyingPiece.color == c) {
                console.log("found piece");
                pawns.push(i);
            }
        }
        console.log(pawns);
        return pawns;
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

    public static getStartingSquareOfColor(c: Color) {
        if (c == Color.RED) return 0;
        if (c == Color.BLUE) return 10;
        if (c == Color.GREEN) return 20;
        if (c == Color.YELLOW) return 30;
    }

    public static passedFinalSquareOfColor(c: Color, previousIndex : number, roll : number): boolean {
        let finalSquareOfColor;
        if (c == Color.RED) finalSquareOfColor = 39;
        if (c == Color.BLUE) finalSquareOfColor = 9;
        if (c == Color.GREEN) finalSquareOfColor = 19;
        if (c == Color.YELLOW) finalSquareOfColor = 29;

        if (c == Color.RED) {
            if (previousIndex + roll > 39) {
                return true;
            }
        } else {
            if (finalSquareOfColor >= previousIndex && finalSquareOfColor < previousIndex + roll) {
                return true;
            }
        }
        return false;
    }
        
    public getSquareArrayOfColor(c: Color) {
        if (c == Color.RED) return this.redSquareArray;
        if (c == Color.BLUE) return this.blueSquareArray;
        if (c == Color.GREEN) return this.greenSquareArray;
        if (c == Color.YELLOW) return this.yellowSquareArray;
    }
}