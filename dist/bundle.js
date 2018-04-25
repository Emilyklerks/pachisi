/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Board.ts":
/*!*********************!*\
  !*** ./js/Board.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
const ColouredSquare_1 = __webpack_require__(/*! ./ColouredSquare */ "./js/ColouredSquare.ts");
const PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
const Square_1 = __webpack_require__(/*! ./Square */ "./js/Square.ts");
class Board {
    constructor() {
        this.squareArray = [];
        this.CORNER_SEQUENCE = [
            "E5", "N4", "E2", "S4", "E4", "S2", "W4", "S4", "W2", "N4", "W4", "N1"
        ];
        this.redSquareArray = [];
        this.blueSquareArray = [];
        this.greenSquareArray = [];
        this.yellowSquareArray = [];
        this.RED_START = 0;
        this.RED_FINAL = 39;
        this.BLUE_START = 10;
        this.BLUE_FINAL = 9;
        this.GREEN_START = 20;
        this.GREEN_FINAL = 19;
        this.YELLOW_START = 30;
        this.YELLOW_FINAL = 29;
        this.SQUARE_SIZE = 50;
        this.fillSquareArray();
        this.fillColouredSquareArrays();
    }
    fillSquareArray() {
        let x = -1;
        let y = 4;
        let currentCornerSequence = 0;
        for (var i = 0; i < 40; i++) {
            let dir = this.CORNER_SEQUENCE[currentCornerSequence];
            let dirLetter = dir.substr(0, 1);
            let dirNumber = parseInt(dir.substr(1, 1));
            if (dirLetter == 'E') {
                x += 1;
            }
            if (dirLetter == 'N') {
                y -= 1;
            }
            if (dirLetter == 'S') {
                y += 1;
            }
            if (dirLetter == 'W') {
                x -= 1;
            }
            dirNumber = dirNumber - 1;
            this.CORNER_SEQUENCE[currentCornerSequence] = dirLetter + String(dirNumber);
            if (dirNumber < 1) {
                currentCornerSequence++;
            }
            this.squareArray[i] = new Square_1.default(PieceHolder_1.default.NONE, x * this.SQUARE_SIZE, y * this.SQUARE_SIZE, Color_1.Color.NONE);
        }
        this.squareArray[this.RED_START].isStartingSquareOfColor = Color_1.Color.RED;
        this.squareArray[this.RED_START].occupyingPiece = PieceHolder_1.default.RED;
        this.squareArray[this.RED_FINAL].isFinalSquareOfColor = Color_1.Color.RED;
        this.squareArray[this.BLUE_START].isStartingSquareOfColor = Color_1.Color.BLUE;
        this.squareArray[this.BLUE_START].occupyingPiece = PieceHolder_1.default.BLUE;
        this.squareArray[this.BLUE_FINAL].isFinalSquareOfColor = Color_1.Color.BLUE;
        this.squareArray[this.GREEN_START].isStartingSquareOfColor = Color_1.Color.GREEN;
        this.squareArray[this.GREEN_START].occupyingPiece = PieceHolder_1.default.GREEN;
        this.squareArray[this.GREEN_FINAL].isFinalSquareOfColor = Color_1.Color.GREEN;
        this.squareArray[this.YELLOW_START].isStartingSquareOfColor = Color_1.Color.YELLOW;
        this.squareArray[this.YELLOW_START].occupyingPiece = PieceHolder_1.default.YELLOW;
        this.squareArray[this.YELLOW_FINAL].isFinalSquareOfColor = Color_1.Color.YELLOW;
    }
    fillColouredSquareArrays() {
        for (var i = 0; i < 4; i++) {
            this.redSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, this.SQUARE_SIZE + i * this.SQUARE_SIZE, 5 * this.SQUARE_SIZE, Color_1.Color.RED);
            this.blueSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 5 * this.SQUARE_SIZE, 50 + i * this.SQUARE_SIZE, Color_1.Color.BLUE);
            this.greenSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 9 * this.SQUARE_SIZE - i * this.SQUARE_SIZE, 5 * this.SQUARE_SIZE, Color_1.Color.BLUE);
            this.yellowSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 5 * this.SQUARE_SIZE, 9 * 50 - i * this.SQUARE_SIZE, Color_1.Color.YELLOW);
        }
        this.redSquareArray[3].occupyingPiece = PieceHolder_1.default.RED;
        this.redSquareArray[1].occupyingPiece = PieceHolder_1.default.RED;
        this.redSquareArray[2].occupyingPiece = PieceHolder_1.default.RED;
    }
    getClickedSquareIndex(x, y) {
        for (var i = 0; i < this.squareArray.length; i++) {
            let s = this.squareArray[i];
            if (x > s.xPos && x < s.xPos + this.SQUARE_SIZE && y > s.yPos && y < s.yPos + this.SQUARE_SIZE) {
                return i;
            }
        }
        return -1;
    }
    isClickedSquareOfColor(x, y, c) {
        let clickedPiece = PieceHolder_1.default.NONE;
        for (var i = 0; i < this.squareArray.length; i++) {
            let s = this.squareArray[i];
            if (x > s.xPos && x < s.xPos + this.SQUARE_SIZE && y > s.yPos && y < s.yPos + this.SQUARE_SIZE) {
                clickedPiece = this.squareArray[i].occupyingPiece;
            }
        }
        if (clickedPiece.color === c) {
            return true;
        }
        else {
            return false;
        }
    }
    getNumberOfPawnsOnBoardOfColor(c) {
        let count = 0;
        for (var i = 0; i < this.squareArray.length; i++) {
            let s = this.squareArray[i];
            if (s.occupyingPiece.color == c) {
                count++;
            }
        }
        return count;
    }
    getIndicesPawnsOnBoardOfColor(c) {
        let pawns = new Array();
        for (var i = 0; i < this.squareArray.length; i++) {
            let s = this.squareArray[i];
            if (s.occupyingPiece.color == c) {
                console.log("found piece");
                pawns.push(i);
            }
        }
        console.log(pawns);
        return pawns;
    }
    getNumberOfPawnsOnEndRowOfColor(c) {
        let arrayToCheck = [];
        if (c == Color_1.Color.RED)
            arrayToCheck = this.redSquareArray;
        if (c == Color_1.Color.BLUE)
            arrayToCheck = this.blueSquareArray;
        if (c == Color_1.Color.GREEN)
            arrayToCheck = this.greenSquareArray;
        if (c == Color_1.Color.YELLOW)
            arrayToCheck = this.yellowSquareArray;
        let count = 0;
        for (let i = 0; i < arrayToCheck.length; i++) {
            if (arrayToCheck[i].occupyingPiece == PieceHolder_1.default.returnPieceOfColor(c)) {
                count++;
            }
        }
        return count;
    }
    static getStartingSquareOfColor(c) {
        if (c == Color_1.Color.RED)
            return 0;
        if (c == Color_1.Color.BLUE)
            return 10;
        if (c == Color_1.Color.GREEN)
            return 20;
        if (c == Color_1.Color.YELLOW)
            return 30;
    }
    static passedFinalSquareOfColor(c, previousIndex, roll) {
        let finalSquareOfColor;
        if (c == Color_1.Color.RED)
            finalSquareOfColor = 39;
        if (c == Color_1.Color.BLUE)
            finalSquareOfColor = 9;
        if (c == Color_1.Color.GREEN)
            finalSquareOfColor = 19;
        if (c == Color_1.Color.YELLOW)
            finalSquareOfColor = 29;
        if (c == Color_1.Color.RED) {
            if (previousIndex + roll > 39) {
                return true;
            }
        }
        else {
            if (finalSquareOfColor >= previousIndex && finalSquareOfColor < previousIndex + roll) {
                return true;
            }
        }
        return false;
    }
    getSquareArrayOfColor(c) {
        if (c == Color_1.Color.RED)
            return this.redSquareArray;
        if (c == Color_1.Color.BLUE)
            return this.blueSquareArray;
        if (c == Color_1.Color.GREEN)
            return this.greenSquareArray;
        if (c == Color_1.Color.YELLOW)
            return this.yellowSquareArray;
    }
}
exports.default = Board;


/***/ }),

/***/ "./js/Bot.ts":
/*!*******************!*\
  !*** ./js/Bot.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
class Bot {
    constructor(c) {
        this.aiColor = c;
    }
    checkIfAIturnIsNext(turnColor) {
        if (turnColor == this.aiColor) {
            return true;
        }
        return false;
    }
    handleTurn(myGc) {
        if (myGc.gameState.myBoard.getNumberOfPawnsOnBoardOfColor(Color_1.Color.BLUE) == 0) {
            myGc = this.clickOk(myGc);
        }
        else {
            let chosenPawn = this.decideMove(myGc.gameState);
            myGc.assignPawnClick(chosenPawn);
            myGc.selectAndMovePawnAndMoveToNextTurn();
        }
        return myGc;
    }
    clickOk(myGc) {
        myGc.moveToNextTurn();
        return myGc;
    }
    decideMove(gs) {
        let pawns = gs.myBoard.getIndicesPawnsOnBoardOfColor(this.aiColor);
        if (pawns.length == 1) {
            console.log("the index of the first pawn is:" + pawns[0]);
            return pawns[0];
        }
        else {
            for (let pawn of pawns) {
                console.log(pawns);
                console.log("rolled number" + gs.rolledNumber);
                let resultingPos = pawn + gs.rolledNumber;
                let colorOnResultPos = gs.myBoard.squareArray[resultingPos].occupyingPiece.color;
                if (colorOnResultPos != Color_1.Color.NONE && colorOnResultPos != this.aiColor) {
                    return pawn;
                }
            }
            return pawns[pawns.length - 1];
        }
    }
    delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
}
exports.Bot = Bot;


/***/ }),

/***/ "./js/Color.ts":
/*!*********************!*\
  !*** ./js/Color.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["YELLOW"] = 3] = "YELLOW";
    Color[Color["NONE"] = 4] = "NONE";
})(Color = exports.Color || (exports.Color = {}));


/***/ }),

/***/ "./js/ColouredSquare.ts":
/*!******************************!*\
  !*** ./js/ColouredSquare.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Square_1 = __webpack_require__(/*! ./Square */ "./js/Square.ts");
class ColouredSquare extends Square_1.default {
    constructor(myPiece, x, y, myCol) {
        super(myPiece, x, y, myCol);
        this.myColor = myCol;
    }
}
exports.default = ColouredSquare;


/***/ }),

/***/ "./js/GameController.ts":
/*!******************************!*\
  !*** ./js/GameController.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = __webpack_require__(/*! ./Board */ "./js/Board.ts");
const Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
const PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
const GameState_1 = __webpack_require__(/*! ./GameState */ "./js/GameState.ts");
const Bot_1 = __webpack_require__(/*! ./Bot */ "./js/Bot.ts");
class GameController {
    constructor() {
        this.clickedPawnIndex = 0;
    }
    initialize() {
        let board = new Board_1.default();
        this.gameState = new GameState_1.default(board, Color_1.Color.RED);
        this.bot = new Bot_1.Bot(Color_1.Color.BLUE);
    }
    checkIfOwnPawnIsClicked(e) {
        if (this.gameState.myBoard.isClickedSquareOfColor(e.clientX, e.clientY, this.gameState.currentTurnColor)) {
            this.clickedPawnIndex = this.gameState.myBoard.getClickedSquareIndex(e.clientX, e.clientY);
            return true;
        }
        return false;
    }
    assignPawnClick(index) {
        this.clickedPawnIndex = index;
    }
    rollDie() {
        let roll = Math.floor(Math.random() * 6) + 1;
        if (roll == 6) {
            const totalPawns = this.gameState.myBoard.getNumberOfPawnsOnBoardOfColor(this.gameState.currentTurnColor) + this.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(this.gameState.currentTurnColor);
            if (totalPawns < 4) {
                let startSquare = Board_1.default.getStartingSquareOfColor(this.gameState.currentTurnColor);
                this.gameState.myBoard.squareArray[startSquare].occupyingPiece = PieceHolder_1.default.returnPieceOfColor(this.gameState.currentTurnColor);
            }
        }
        this.gameState.rolledNumber = roll;
    }
    selectAndMovePawnAndMoveToNextTurn() {
        const rolledPluscurrent = this.clickedPawnIndex + this.gameState.rolledNumber;
        const resultingPosition = rolledPluscurrent > 39 ? rolledPluscurrent - 38 : rolledPluscurrent;
        if (Board_1.default.passedFinalSquareOfColor(this.gameState.currentTurnColor, this.clickedPawnIndex, this.gameState.rolledNumber)) {
            this.movePawnToFinalRow();
        }
        else {
            this.movePawn(resultingPosition);
        }
    }
    movePawn(resultPos) {
        if (this.gameState.myBoard.squareArray[resultPos].occupyingPiece.color == this.gameState.currentTurnColor) {
            alert("You can't move your pawn to land on one of your own pawns.");
        }
        else {
            this.gameState.myBoard.squareArray[this.clickedPawnIndex].occupyingPiece = PieceHolder_1.default.NONE;
            this.gameState.myBoard.squareArray[resultPos].occupyingPiece = PieceHolder_1.default.returnPieceOfColor(this.gameState.currentTurnColor);
            this.moveToNextTurn();
        }
    }
    movePawnToFinalRow() {
        let c = this.gameState.currentTurnColor;
        let finalRow = this.gameState.myBoard.getSquareArrayOfColor(c);
        let firstFreeSpotOnFinalRow = 3 - this.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(c);
        this.gameState.myBoard.squareArray[this.clickedPawnIndex].occupyingPiece = PieceHolder_1.default.NONE;
        this.gameState.myBoard.getSquareArrayOfColor(c)[firstFreeSpotOnFinalRow].occupyingPiece = PieceHolder_1.default.returnPieceOfColor(c);
        this.moveToNextTurn();
    }
    moveToNextTurn() {
        if (this.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(this.gameState.currentTurnColor) == 4) {
            alert(Color_1.Color[this.gameState.currentTurnColor] + "won!");
            this.initialize();
        }
        else {
            this.gameState.currentTurnColor = this.gameState.currentTurnColor == 3 ? 0 : this.gameState.currentTurnColor + 1;
            this.rollDie();
        }
    }
}
exports.default = GameController;


/***/ }),

/***/ "./js/GameGUI.ts":
/*!***********************!*\
  !*** ./js/GameGUI.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
const PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
class GameGUI {
    static drawGameState(GS) {
        console.log(document);
        document.getElementById("rolledNumber").innerHTML = "";
        document.getElementById("buttonContainer").innerHTML = "";
        const colorString = Color_1.Color[GS.currentTurnColor];
        document.getElementById("turnIndicator").innerHTML = colorString + "'s turn!";
        if (GS.myBoard.getNumberOfPawnsOnBoardOfColor(GS.currentTurnColor) == 0) {
            if (GS.rolledNumber == 6) {
                let str = "You rolled a 6! You get a new pawn.";
            }
            else {
                let str = "You have currently have no pawns on the board. You will get a pawn when you roll a 6.";
                document.getElementById("rolledNumber").innerHTML = str;
                document.getElementById("buttonContainer").innerHTML = "<button onclick='gc.moveToNextTurn();GameGUI.drawGameState(gc.gameState);'>ok</button>";
            }
        }
        else {
            document.getElementById("rolledNumber").innerHTML = "You have rolled a " + GS.rolledNumber + ". Please select a piece to move.";
        }
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        //Draw the normal board
        for (var i = 0; i < GS.myBoard.squareArray.length; i++) {
            let thisSquare = GS.myBoard.squareArray[i];
            ctx.fillStyle = "white";
            if (thisSquare.isStartingSquareOfColor == Color_1.Color.RED) {
                ctx.fillStyle = "pink";
            }
            else if (thisSquare.isStartingSquareOfColor == Color_1.Color.BLUE) {
                ctx.fillStyle = "lightblue";
            }
            else if (thisSquare.isStartingSquareOfColor == Color_1.Color.YELLOW) {
                ctx.fillStyle = "lightyellow";
            }
            else if (thisSquare.isStartingSquareOfColor == Color_1.Color.GREEN) {
                ctx.fillStyle = "lightgreen";
            }
            ctx.beginPath();
            ctx.fillRect(thisSquare.xPos, thisSquare.yPos, 50, 50);
            ctx.strokeRect(thisSquare.xPos, thisSquare.yPos, 50, 50);
            ctx.stroke();
            //draw the Pieces
            if (thisSquare.occupyingPiece != PieceHolder_1.default.NONE) {
                ctx.beginPath();
                ctx.arc(thisSquare.xPos + 25, thisSquare.yPos + 25, 20, 0, 2 * Math.PI);
                ctx.fillStyle = thisSquare.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
        }
        //Draw the final 4 squares of each color
        for (var i = 0; i < 4; i++) {
            let red = GS.myBoard.redSquareArray[i];
            let blue = GS.myBoard.blueSquareArray[i];
            let green = GS.myBoard.greenSquareArray[i];
            let yellow = GS.myBoard.yellowSquareArray[i];
            ctx.fillStyle = "red";
            ctx.fillRect(red.xPos, red.yPos, 50, 50);
            ctx.strokeRect(red.xPos, red.yPos, 50, 50);
            ctx.fillStyle = "blue";
            ctx.fillRect(blue.xPos, blue.yPos, 50, 50);
            ctx.strokeRect(blue.xPos, blue.yPos, 50, 50);
            ctx.fillStyle = "green";
            ctx.fillRect(green.xPos, green.yPos, 50, 50);
            ctx.strokeRect(green.xPos, green.yPos, 50, 50);
            ctx.fillStyle = "yellow";
            ctx.fillRect(yellow.xPos, yellow.yPos, 50, 50);
            ctx.strokeRect(yellow.xPos, yellow.yPos, 50, 50);
            ctx.stroke();
            //draw the Pieces
            if (red.occupyingPiece != PieceHolder_1.default.NONE) {
                ctx.beginPath();
                ctx.arc(red.xPos + 25, red.yPos + 25, 20, 0, 2 * Math.PI);
                ctx.fillStyle = red.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
            if (blue.occupyingPiece != PieceHolder_1.default.NONE) {
                ctx.beginPath();
                ctx.arc(blue.xPos + 25, blue.yPos + 25, 20, 0, 2 * Math.PI);
                ctx.fillStyle = blue.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
            if (green.occupyingPiece != PieceHolder_1.default.NONE) {
                ctx.beginPath();
                ctx.arc(green.xPos + 25, green.yPos + 25, 20, 0, 2 * Math.PI);
                ctx.fillStyle = green.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
            if (yellow.occupyingPiece != PieceHolder_1.default.NONE) {
                ctx.beginPath();
                ctx.arc(yellow.xPos + 25, yellow.yPos + 25, 20, 0, 2 * Math.PI);
                ctx.fillStyle = yellow.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
        }
    }
    gameOver(c) {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        let str = Color_1.Color[c].toString;
        ctx.fillText(str + " wins!", 300, 50);
    }
}
exports.default = GameGUI;


/***/ }),

/***/ "./js/GameState.ts":
/*!*************************!*\
  !*** ./js/GameState.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GameState {
    constructor(newBoard, newTurnColor, isDieRolled = false, newRolledNumber = 0) {
        this.NR_OF_SQUARES_IN_BOARD = 39;
        this.myBoard = newBoard;
        this.currentTurnColor = newTurnColor;
        this.dieRolled = isDieRolled;
        this.rolledNumber = newRolledNumber;
    }
}
exports.default = GameState;


/***/ }),

/***/ "./js/Piece.ts":
/*!*********************!*\
  !*** ./js/Piece.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(colorString, color, number) {
        this.colorString = colorString;
        this.color = color;
        this.number = number;
    }
}
exports.default = Piece;


/***/ }),

/***/ "./js/PieceHolder.ts":
/*!***************************!*\
  !*** ./js/PieceHolder.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
const Piece_1 = __webpack_require__(/*! ./Piece */ "./js/Piece.ts");
class PieceHolder {
    static returnPieceOfColor(c) {
        if (c == Color_1.Color.BLUE) {
            return this.BLUE;
        }
        if (c == Color_1.Color.RED) {
            return this.RED;
        }
        if (c == Color_1.Color.GREEN) {
            return this.GREEN;
        }
        if (c == Color_1.Color.YELLOW) {
            return this.YELLOW;
        }
    }
}
PieceHolder.BLUE = new Piece_1.default("blue", Color_1.Color.BLUE, 1);
PieceHolder.RED = new Piece_1.default("red", Color_1.Color.RED, 1);
PieceHolder.YELLOW = new Piece_1.default("yellow", Color_1.Color.YELLOW, 1);
PieceHolder.GREEN = new Piece_1.default("green", Color_1.Color.GREEN, 1);
PieceHolder.NONE = new Piece_1.default("white", Color_1.Color.NONE, 0);
exports.default = PieceHolder;


/***/ }),

/***/ "./js/Square.ts":
/*!**********************!*\
  !*** ./js/Square.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Square {
    constructor(myPiece, x, y, startColor) {
        this.occupyingPiece = myPiece;
        this.xPos = x;
        this.yPos = y;
        this.isStartingSquareOfColor = startColor;
    }
}
exports.default = Square;


/***/ }),

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GameController_1 = __webpack_require__(/*! ./GameController */ "./js/GameController.ts");
const GameGUI_1 = __webpack_require__(/*! ./GameGUI */ "./js/GameGUI.ts");
const Bot_1 = __webpack_require__(/*! ./Bot */ "./js/Bot.ts");
const Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
function init() {
    var gc = new GameController_1.default();
    gc.initialize();
    const bot = new Bot_1.Bot(Color_1.Color.BLUE);
    window["gc"] = gc;
    window["GameGUI"] = GameGUI_1.default;
    gc.rollDie();
    GameGUI_1.default.drawGameState(gc.gameState);
    document.getElementById("myCanvas").addEventListener("click", event => {
        playTurn(event);
    });
    function playTurn(event) {
        if (gc.checkIfOwnPawnIsClicked(event)) {
            gc.selectAndMovePawnAndMoveToNextTurn();
            GameGUI_1.default.drawGameState(gc.gameState);
            if (bot.checkIfAIturnIsNext(gc.gameState.currentTurnColor)) {
                document.getElementById("myCanvas").outerHTML = document.getElementById("myCanvas").outerHTML;
                GameGUI_1.default.drawGameState(gc.gameState);
                delay(1000).then(() => {
                    gc = bot.handleTurn(gc),
                        GameGUI_1.default.drawGameState(gc.gameState);
                    document.getElementById("myCanvas").addEventListener("click", event => {
                        playTurn(event);
                    });
                });
            }
        }
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
init();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map