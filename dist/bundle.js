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
var Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
var ColouredSquare_1 = __webpack_require__(/*! ./ColouredSquare */ "./js/ColouredSquare.ts");
var PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
var Square_1 = __webpack_require__(/*! ./Square */ "./js/Square.ts");
var Board = /** @class */ (function () {
    function Board() {
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
    Board.prototype.fillSquareArray = function () {
        var x = -1;
        var y = 4;
        var currentCornerSequence = 0;
        for (var i = 0; i < 40; i++) {
            var dir = this.CORNER_SEQUENCE[currentCornerSequence];
            var dirLetter = dir.substr(0, 1);
            var dirNumber = parseInt(dir.substr(1, 1));
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
    };
    Board.prototype.fillColouredSquareArrays = function () {
        //RED
        for (var i = 0; i < 4; i++) {
            this.redSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, this.SQUARE_SIZE + i * this.SQUARE_SIZE, 5 * this.SQUARE_SIZE, Color_1.Color.RED);
            this.blueSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 5 * this.SQUARE_SIZE, 50 + i * this.SQUARE_SIZE, Color_1.Color.BLUE);
            this.greenSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 9 * this.SQUARE_SIZE - i * this.SQUARE_SIZE, 5 * this.SQUARE_SIZE, Color_1.Color.BLUE);
            this.yellowSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 5 * this.SQUARE_SIZE, 9 * 50 - i * this.SQUARE_SIZE, Color_1.Color.YELLOW);
        }
    };
    Board.prototype.getClickedSquareIndex = function (x, y) {
        for (var i = 0; i < this.squareArray.length; i++) {
            var s = this.squareArray[i];
            if (x > s.xPos && x < s.xPos + this.SQUARE_SIZE && y > s.yPos && y < s.yPos + this.SQUARE_SIZE) {
                console.log("x: " + x + " y: " + y + " clicked square: " + i);
                return i;
            }
        }
        return -1;
    };
    Board.prototype.getNumberOfPawnsOnBoardOfColor = function (c) {
        var count = 0;
        for (var i = 0; i < this.squareArray.length; i++) {
            var s = this.squareArray[i];
            if (s.occupyingPiece.color == c) {
                count++;
            }
        }
        return count;
    };
    Board.prototype.getNumberOfPawnsOnEndRowOfColor = function (c) {
        var arrayToCheck = [];
        if (c == Color_1.Color.RED)
            arrayToCheck = this.redSquareArray;
        if (c == Color_1.Color.BLUE)
            arrayToCheck = this.blueSquareArray;
        if (c == Color_1.Color.GREEN)
            arrayToCheck = this.greenSquareArray;
        if (c == Color_1.Color.YELLOW)
            arrayToCheck = this.yellowSquareArray;
        var count = 0;
        for (var i = 0; i < arrayToCheck.length; i++) {
            if (arrayToCheck[i].occupyingPiece == PieceHolder_1.default.returnPieceOfColor(c)) {
                count++;
            }
        }
        return count;
    };
    Board.getStartingSquareOfColor = function (c) {
        if (c == Color_1.Color.RED)
            return 0;
        if (c == Color_1.Color.BLUE)
            return 10;
        if (c == Color_1.Color.GREEN)
            return 20;
        if (c == Color_1.Color.YELLOW)
            return 30;
    };
    Board.passedFinalSquareOfColor = function (c, previousIndex, roll) {
        var finalSquareOfColor;
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
    };
    Board.prototype.getSquareArrayOfColor = function (c) {
        if (c == Color_1.Color.RED)
            return this.redSquareArray;
        if (c == Color_1.Color.BLUE)
            return this.blueSquareArray;
        if (c == Color_1.Color.GREEN)
            return this.greenSquareArray;
        if (c == Color_1.Color.YELLOW)
            return this.yellowSquareArray;
    };
    return Board;
}());
exports.default = Board;


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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = __webpack_require__(/*! ./Square */ "./js/Square.ts");
var ColouredSquare = /** @class */ (function (_super) {
    __extends(ColouredSquare, _super);
    function ColouredSquare(myPiece, x, y, myCol) {
        var _this = _super.call(this, myPiece, x, y, myCol) || this;
        _this.myColor = myCol;
        return _this;
    }
    return ColouredSquare;
}(Square_1.default));
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
var Board_1 = __webpack_require__(/*! ./Board */ "./js/Board.ts");
var Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
var PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
var GameState_1 = __webpack_require__(/*! ./GameState */ "./js/GameState.ts");
var GameGUI_1 = __webpack_require__(/*! ./GameGUI */ "./js/GameGUI.ts");
var GameController = /** @class */ (function () {
    function GameController() {
        this.clickedPawnIndex = 0;
    }
    GameController.prototype.initialize = function () {
        var board = new Board_1.default();
        this.gameState = new GameState_1.default(board, Color_1.Color.RED);
    };
    GameController.prototype.iterateTurns = function () {
        GameGUI_1.default.drawGameState(this.gameState);
        this.rollDie();
        GameGUI_1.default.drawGameState(this.gameState);
    };
    GameController.prototype.rollDie = function () {
        var roll = Math.floor(Math.random() * 6) + 1;
        if (roll == 6) {
            if (this.gameState.myBoard.getNumberOfPawnsOnBoardOfColor(this.gameState.currentTurnColor) < 4) {
                var startSquare = Board_1.default.getStartingSquareOfColor(this.gameState.currentTurnColor);
                this.gameState.myBoard.squareArray[startSquare].occupyingPiece = PieceHolder_1.default.returnPieceOfColor(this.gameState.currentTurnColor);
            }
        }
        this.gameState = new GameState_1.default(this.gameState.myBoard, this.gameState.currentTurnColor, true, roll);
    };
    GameController.prototype.selectPawn = function () {
        var rolledPluscurrent = this.clickedPawnIndex + this.gameState.rolledNumber;
        var resultingPosition = rolledPluscurrent > 39 ? rolledPluscurrent - 39 : rolledPluscurrent;
        if (Board_1.default.passedFinalSquareOfColor(this.gameState.currentTurnColor, this.clickedPawnIndex, this.gameState.rolledNumber)) {
            this.movePawnToFinalRow();
        }
        else {
            this.movePawn(resultingPosition);
        }
    };
    GameController.prototype.clickOnBoardToChoosePawn = function (e) {
        this.mouseX = e.clientX - 10;
        this.mouseY = e.clientY - 10;
        var clickedSquareIndex = this.gameState.myBoard.getClickedSquareIndex(this.mouseX, this.mouseY);
        var clickedPiece = this.gameState.myBoard.squareArray[clickedSquareIndex].occupyingPiece;
        if (clickedPiece.color === this.gameState.currentTurnColor) {
            this.clickedPawnIndex = clickedSquareIndex;
            this.selectPawn();
        }
    };
    GameController.prototype.movePawn = function (resultPos) {
        if (this.gameState.myBoard.squareArray[resultPos].occupyingPiece.color == this.gameState.currentTurnColor) {
            alert("You can't move your pawn to land on one of your own pawns.");
        }
        else {
            this.gameState.myBoard.squareArray[this.clickedPawnIndex].occupyingPiece = PieceHolder_1.default.NONE;
            this.gameState.myBoard.squareArray[resultPos].occupyingPiece = PieceHolder_1.default.returnPieceOfColor(this.gameState.currentTurnColor);
            this.moveToNextTurn();
        }
    };
    GameController.prototype.movePawnToFinalRow = function () {
        var c = this.gameState.currentTurnColor;
        var finalRow = this.gameState.myBoard.getSquareArrayOfColor(c);
        var firstFreeSpotOnFinalRow = 3 - this.gameState.myBoard.getNumberOfPawnsOnEndRowOfColor(c);
        this.gameState.myBoard.squareArray[this.clickedPawnIndex].occupyingPiece = PieceHolder_1.default.NONE;
        this.gameState.myBoard.getSquareArrayOfColor(c)[firstFreeSpotOnFinalRow].occupyingPiece = PieceHolder_1.default.returnPieceOfColor(c);
        this.moveToNextTurn();
    };
    GameController.prototype.moveToNextTurn = function () {
        this.gameState.currentTurnColor = this.gameState.currentTurnColor == 3 ? 0 : this.gameState.currentTurnColor + 1;
        this.iterateTurns();
    };
    return GameController;
}());
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
var Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
var PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
var GameGUI = /** @class */ (function () {
    function GameGUI() {
    }
    GameGUI.drawGameState = function (GS) {
        document.getElementById("rolledNumber").innerHTML = "";
        document.getElementById("buttonContainer").innerHTML = "";
        var colorString = Color_1.Color[GS.currentTurnColor];
        document.getElementById("turnIndicator").innerHTML = colorString + "'s turn!";
        if (GS.myBoard.getNumberOfPawnsOnBoardOfColor(GS.currentTurnColor) == 0) {
            if (GS.rolledNumber == 6) {
                var str = "You rolled a 6! You get a new pawn.";
            }
            else {
                var str = "You have currently have no pawns on the board. You will get a pawn when you roll a 6.";
                document.getElementById("rolledNumber").innerHTML = str;
                document.getElementById("buttonContainer").innerHTML = "<button onclick='gc.moveToNextTurn()'>ok</button>";
            }
        }
        else {
            document.getElementById("rolledNumber").innerHTML = "You have rolled a " + GS.rolledNumber + ". Please select a piece to move.";
        }
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        //Draw the normal board
        for (var i = 0; i < GS.myBoard.squareArray.length; i++) {
            var thisSquare = GS.myBoard.squareArray[i];
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
            var red = GS.myBoard.redSquareArray[i];
            var blue = GS.myBoard.blueSquareArray[i];
            var green = GS.myBoard.greenSquareArray[i];
            var yellow = GS.myBoard.yellowSquareArray[i];
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
    };
    GameGUI.prototype.gameOver = function (c) {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        var str = Color_1.Color[c].toString;
        ctx.fillText(str + " wins!", 300, 50);
    };
    return GameGUI;
}());
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
var GameState = /** @class */ (function () {
    function GameState(newBoard, newTurnColor, isDieRolled, newRolledNumber) {
        if (isDieRolled === void 0) { isDieRolled = false; }
        if (newRolledNumber === void 0) { newRolledNumber = 0; }
        this.NR_OF_SQUARES_IN_BOARD = 39;
        this.myBoard = newBoard;
        this.currentTurnColor = newTurnColor;
        this.dieRolled = isDieRolled;
        this.rolledNumber = newRolledNumber;
    }
    return GameState;
}());
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
var Piece = /** @class */ (function () {
    function Piece(colorString, color, number) {
        this.colorString = colorString;
        this.color = color;
        this.number = number;
    }
    return Piece;
}());
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
var Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
var Piece_1 = __webpack_require__(/*! ./Piece */ "./js/Piece.ts");
var PieceHolder = /** @class */ (function () {
    function PieceHolder() {
    }
    PieceHolder.returnPieceOfColor = function (c) {
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
    };
    PieceHolder.BLUE = new Piece_1.default("blue", Color_1.Color.BLUE, 1);
    PieceHolder.RED = new Piece_1.default("red", Color_1.Color.RED, 1);
    PieceHolder.YELLOW = new Piece_1.default("yellow", Color_1.Color.YELLOW, 1);
    PieceHolder.GREEN = new Piece_1.default("green", Color_1.Color.GREEN, 1);
    PieceHolder.NONE = new Piece_1.default("white", Color_1.Color.NONE, 0);
    return PieceHolder;
}());
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
var Square = /** @class */ (function () {
    function Square(myPiece, x, y, startColor) {
        this.occupyingPiece = myPiece;
        this.xPos = x;
        this.yPos = y;
        this.isStartingSquareOfColor = startColor;
    }
    return Square;
}());
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
var GameController_1 = __webpack_require__(/*! ./GameController */ "./js/GameController.ts");
function main() {
    var gc = new GameController_1.default();
    gc.initialize();
    gc.iterateTurns();
    document.getElementById("myCanvas").addEventListener("click", function (event) { gc.clickOnBoardToChoosePawn(event); });
    window["gc"] = gc;
}
exports.default = main;
main();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map