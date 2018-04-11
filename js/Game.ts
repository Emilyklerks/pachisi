// import Board from "./Board";
// import { Color } from "./Color";
// import GUI from "./GUI";
// import Piece from "./Piece";
// import PieceHolder from "./PieceHolder";
// import Square from "./Square";

// class Game {
//     myBoard : Board;
//     myGUI : GUI;
//     currentTurnColor : Color;
//     mouseX;
//     mouseY;
//     rolledNumber;
//     buttonContainer;


//     constructor() {
//         this.myBoard = new Board();
//         this.myGUI = new GUI(this.myBoard);
//         this.rolledNumber = 0;
//         this.buttonContainer = document.getElementById("buttonContainer");
//     }   

//     public initialize(): void {
//         this.currentTurnColor = Color.RED;
//         this.myGUI.drawBoardWithPawns();
//         document.getElementById("turnIndicator").innerHTML = Color[this.currentTurnColor] + "'s turn";  
//     }

//     public rollDie(): void {
//         this.rolledNumber = Math.floor(Math.random() * 6) + 1;
//         let pawnsOnBoard = this.myBoard.getNumberOfPawnsOnBoardOfColor(this.currentTurnColor);

//         if (pawnsOnBoard > 0) {
//             this.buttonContainer.innerHTML = "<div id='diceNumber'>choose a pawn to move " +  this.rolledNumber + " steps.</div>";
//             if (this.rolledNumber == 6) {   
//                if(this.myBoard.getNumberOfPawnsOnBoardOfColor(this.currentTurnColor) + this.myBoard.getNumberOfPawnsOnEndRowOfColor(this.currentTurnColor) <4) {
//                     this.placeNewPawnOnBoard();
//                } 
//                this.buttonContainer.innerHTML += "<div id='diceNumber'>You rolled a 6! A new pawn has been placed on the board. </div>";
//             }
//         } else {
//             if (this.rolledNumber == 6) {
//                 this.buttonContainer.innerHTML = "<div id='diceNumber'>You rolled a 6! A new pawn has been placed on the board. </div>";
//                 this.placeNewPawnOnBoard();        
//             } else {
//                 this.buttonContainer.innerHTML = "<div id='diceNumber'>You rolled " +  this. rolledNumber + ". You will get a new pawn on the board when you roll 6</div>";   
//             }
            
//             this.buttonContainer.innerHTML += "<button id='okButton' onclick=myGame.nextTurn()> ok </button>";
//             //document.getElementById("okButton").addEventListener("click", () => this.nextTurn());
//         } 
//     }

//     public mousePosition(e): void {
//         this.mouseX = e.clientX - 10;
//         this.mouseY = e.clientY - 10;
//     }

//     public choosePawn(): void {
//         if (this.rolledNumber != 0) {
//             let clickedSquareIndex = this.myBoard.getClickedSquareIndex(this.mouseX, this.mouseY);
//             let movedPiece : Piece = this.myBoard.squareArray[clickedSquareIndex].occupyingPiece;

//             if (movedPiece.color == this.currentTurnColor ) {       
//                 this.findNewPositionForPawn(movedPiece, clickedSquareIndex);              
//             }
//         }
//     }

//     public findNewPositionForPawn(p : Piece, previous : number) {
//         let rolledPluscurrent = previous+this.rolledNumber;
//         let result = rolledPluscurrent >= this.myBoard.squareArray.length ?  rolledPluscurrent - this.myBoard.squareArray.length : rolledPluscurrent;
//         let finalSquareOfColor = Board.getFinalSquareOfColor(this.currentTurnColor);
//         let coloredSquareArray = this.myBoard.getSquareArrayOfColor(this.currentTurnColor);
//         let firstFreeSpotOnFinalRow = 3 - this.myBoard.getNumberOfPawnsOnEndRowOfColor(this.currentTurnColor);

//         if (this.passedFinalSquare(previous, p.color)) {
//             console.log("passed final square, moving to endrow");
//             this.movePawn(coloredSquareArray, previous, firstFreeSpotOnFinalRow, p);
//         } else {
//             console.log("not passing final square, moving to new square");
//             this.movePawn(this.myBoard.squareArray, previous, result, p);
//         }
//     }

//     public movePawn(row : Square[], source : number, dest : number, pawn : Piece) {
//         if (row[dest].occupyingPiece.color == pawn.color) {
//             alert("You can't move your pawn to land on one of your own pawns.")
//         } else {
//             this.myBoard.squareArray[source].occupyingPiece = PieceHolder.NONE;
//             row[dest].occupyingPiece = pawn;
//             this.myGUI.drawBoardWithPawns();
//             this.nextTurn();
//         }
//     }

//     public passedFinalSquare(previousIndex : number, c : Color): boolean {
//         let finalSquareOfColor = Board.getFinalSquareOfColor(this.currentTurnColor);

//         if (c == Color.RED) {
//             if (previousIndex + this.rolledNumber > this.myBoard.squareArray.length) {
//                 return true;
//             }
//         } else {
//             if (finalSquareOfColor >= previousIndex && finalSquareOfColor < previousIndex + this.rolledNumber) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     public placeNewPawnOnBoard() {
//         let startSquare = this.myBoard.getStartingSquareOfColor(this.currentTurnColor); 
//         this.myBoard.squareArray[startSquare].occupyingPiece = PieceHolder.returnPieceOfColor(this.currentTurnColor);
//         this.myGUI.drawBoardWithPawns(); 
//     }
    
//     public nextTurn() {   
//         if (this.myBoard.getNumberOfPawnsOnEndRowOfColor(this.currentTurnColor) == 4) {
//             this.gameOver();
//         } else {
//             this.rolledNumber = 0;
//             this.currentTurnColor = this.currentTurnColor == 3? 0 : this.currentTurnColor +1;
//             document.getElementById("turnIndicator").innerHTML = Color[this.currentTurnColor] + "'s turn";  
//             document.getElementById("buttonContainer").innerHTML = "<button id='turnButton' onclick=myGame.rollDie() >Roll die!</button>";
//             //document.getElementById("turnButton").addEventListener("click", () => myGame.rollDie());
//         }
//     }

//     public gameOver() {
//         this.myGUI.gameOver(this.currentTurnColor);
//     }
// }

// let myGame : Game = new Game();
// myGame.initialize();

// const canvas = document.getElementById("myCanvas");
// canvas.addEventListener("mousemove", event => myGame.mousePosition(event));
// canvas.addEventListener("click", () => myGame.choosePawn());

// document.getElementById("turnButton").addEventListener("click", () => myGame.rollDie());

// window["myGame"] = myGame;
