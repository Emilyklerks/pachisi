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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/Game.ts");
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
        this.cornerSequence = [
            "E5", "N4", "E2", "S4", "E4", "S2", "W4", "S4", "W2", "N4", "W4", "N1"
        ];
        this.redSquareArray = [];
        this.blueSquareArray = [];
        this.greenSquareArray = [];
        this.yellowSquareArray = [];
        this.fillSquareArray();
        this.fillColouredSquareArrays();
        // this.piecesOnBoard();       
    }
    Board.prototype.fillSquareArray = function () {
        var x = -1;
        var y = 4;
        var currentCornerSequence = 0;
        for (var i = 0; i < 40; i++) {
            var dir = this.cornerSequence[currentCornerSequence];
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
            this.cornerSequence[currentCornerSequence] = dirLetter + String(dirNumber);
            if (dirNumber < 1) {
                currentCornerSequence++;
            }
            this.squareArray[i] = new Square_1.default(PieceHolder_1.default.NONE, x * 50, y * 50, Color_1.Color.NONE);
        }
        this.squareArray[0].isStartingSquareOfColor = Color_1.Color.RED;
        this.squareArray[0].occupyingPiece = PieceHolder_1.default.RED;
        this.squareArray[39].isFinalSquareOfColor = Color_1.Color.RED;
        this.squareArray[10].isStartingSquareOfColor = Color_1.Color.BLUE;
        this.squareArray[10].occupyingPiece = PieceHolder_1.default.BLUE;
        this.squareArray[9].isFinalSquareOfColor = Color_1.Color.BLUE;
        this.squareArray[20].isStartingSquareOfColor = Color_1.Color.GREEN;
        this.squareArray[20].occupyingPiece = PieceHolder_1.default.GREEN;
        this.squareArray[19].isFinalSquareOfColor = Color_1.Color.GREEN;
        this.squareArray[30].isStartingSquareOfColor = Color_1.Color.YELLOW;
        this.squareArray[30].occupyingPiece = PieceHolder_1.default.YELLOW;
        this.squareArray[29].isFinalSquareOfColor = Color_1.Color.YELLOW;
    };
    Board.prototype.fillColouredSquareArrays = function () {
        //RED
        for (var i = 0; i < 4; i++) {
            this.redSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 50 + i * 50, 5 * 50, Color_1.Color.RED);
            this.blueSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 5 * 50, 50 + i * 50, Color_1.Color.BLUE);
            this.greenSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 9 * 50 - i * 50, 5 * 50, Color_1.Color.BLUE);
            this.yellowSquareArray[i] = new ColouredSquare_1.default(PieceHolder_1.default.NONE, 5 * 50, 9 * 50 - i * 50, Color_1.Color.YELLOW);
        }
    };
    Board.prototype.getClickedSquareIndex = function (x, y) {
        for (var i = 0; i < this.squareArray.length; i++) {
            var s = this.squareArray[i];
            if (x > s.xPos && x < s.xPos + 50 && y > s.yPos && y < s.yPos + 50) {
                return i;
            }
        }
        return 0;
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
    Board.prototype.getStartingSquareOfColor = function (c) {
        if (c == Color_1.Color.RED)
            return 0;
        if (c == Color_1.Color.BLUE)
            return 10;
        if (c == Color_1.Color.GREEN)
            return 20;
        if (c == Color_1.Color.YELLOW)
            return 30;
    };
    Board.prototype.getFinalSquareOfColor = function (c) {
        if (c == Color_1.Color.RED)
            return 39;
        if (c == Color_1.Color.BLUE)
            return 9;
        if (c == Color_1.Color.GREEN)
            return 19;
        if (c == Color_1.Color.YELLOW)
            return 29;
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

/***/ "./js/GUI.ts":
/*!*******************!*\
  !*** ./js/GUI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
var PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
var GUI = /** @class */ (function () {
    function GUI(b) {
        this.boardToBeDrawn = b;
    }
    GUI.prototype.drawBoardWithPawns = function () {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        //Draw the normal board
        for (var i = 0; i < this.boardToBeDrawn.squareArray.length; i++) {
            var thisSquare = this.boardToBeDrawn.squareArray[i];
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
            var red = this.boardToBeDrawn.redSquareArray[i];
            var blue = this.boardToBeDrawn.blueSquareArray[i];
            var green = this.boardToBeDrawn.greenSquareArray[i];
            var yellow = this.boardToBeDrawn.yellowSquareArray[i];
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
        // ctx.onclick = function (event){
        //     if (event.region) {
        //         alert('You clicked ' + event.region);
        //     }
        // }
    };
    GUI.prototype.gameOver = function (c) {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        var str = Color_1.Color[c].toString;
        ctx.fillText(str + " wins!", 300, 50);
    };
    return GUI;
}());
exports.default = GUI;


/***/ }),

/***/ "./js/Game.ts":
/*!********************!*\
  !*** ./js/Game.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = __webpack_require__(/*! ./Board */ "./js/Board.ts");
var Color_1 = __webpack_require__(/*! ./Color */ "./js/Color.ts");
var GUI_1 = __webpack_require__(/*! ./GUI */ "./js/GUI.ts");
var PieceHolder_1 = __webpack_require__(/*! ./PieceHolder */ "./js/PieceHolder.ts");
var Game = /** @class */ (function () {
    function Game() {
        this.myBoard = new Board_1.default();
        this.myGUI = new GUI_1.default(this.myBoard);
        this.rolledNumber = 0;
        this.buttonContainer = document.getElementById("buttonContainer");
    }
    Game.prototype.initialize = function () {
        this.currentTurnColor = Color_1.Color.RED;
        this.myGUI.drawBoardWithPawns();
        document.getElementById("turnIndicator").innerHTML = Color_1.Color[this.currentTurnColor] + "'s turn";
    };
    Game.prototype.rollDie = function () {
        this.rolledNumber = Math.floor(Math.random() * 6) + 1;
        var pawnsOnBoard = this.myBoard.getNumberOfPawnsOnBoardOfColor(this.currentTurnColor);
        if (pawnsOnBoard > 0) {
            this.buttonContainer.innerHTML = "<div id='diceNumber'>choose a pawn to move " + this.rolledNumber + " steps.</div>";
            if (this.rolledNumber == 6) {
                if (this.myBoard.getNumberOfPawnsOnBoardOfColor(this.currentTurnColor) + this.myBoard.getNumberOfPawnsOnEndRowOfColor(this.currentTurnColor) < 4) {
                    this.placeNewPawnOnBoard();
                }
                this.buttonContainer.innerHTML += "<div id='diceNumber'>You rolled a 6! A new pawn has been placed on the board. </div>";
            }
        }
        else {
            if (this.rolledNumber == 6) {
                this.buttonContainer.innerHTML = "<div id='diceNumber'>You rolled a 6! A new pawn has been placed on the board. </div>";
                this.placeNewPawnOnBoard();
            }
            else {
                this.buttonContainer.innerHTML = "<div id='diceNumber'>You rolled " + this.rolledNumber + ". You will get a new pawn on the board when you roll 6</div>";
            }
            this.buttonContainer.innerHTML += "<button id='okButton' onclick=myGame.nextTurn()> ok </button>";
            //document.getElementById("okButton").addEventListener("click", () => this.nextTurn());
        }
    };
    Game.prototype.mousePosition = function (e) {
        this.mouseX = e.clientX - 10;
        this.mouseY = e.clientY - 10;
    };
    Game.prototype.choosePawn = function () {
        if (this.rolledNumber != 0) {
            var clickedSquareIndex = this.myBoard.getClickedSquareIndex(this.mouseX, this.mouseY);
            var movedPiece = this.myBoard.squareArray[clickedSquareIndex].occupyingPiece;
            if (movedPiece.color == this.currentTurnColor) {
                this.findNewPositionForPawn(movedPiece, clickedSquareIndex);
            }
        }
    };
    Game.prototype.findNewPositionForPawn = function (p, previous) {
        var rolledPluscurrent = previous + this.rolledNumber;
        var result = rolledPluscurrent >= this.myBoard.squareArray.length ? rolledPluscurrent - this.myBoard.squareArray.length : rolledPluscurrent;
        var finalSquareOfColor = this.myBoard.getFinalSquareOfColor(this.currentTurnColor);
        var coloredSquareArray = this.myBoard.getSquareArrayOfColor(this.currentTurnColor);
        var firstFreeSpotOnFinalRow = 3 - this.myBoard.getNumberOfPawnsOnEndRowOfColor(this.currentTurnColor);
        if (this.passedFinalSquare(previous, p.color)) {
            console.log("passed final square, moving to endrow");
            this.movePawn(coloredSquareArray, previous, firstFreeSpotOnFinalRow, p);
        }
        else {
            console.log("not passing final square, moving to new square");
            this.movePawn(this.myBoard.squareArray, previous, result, p);
        }
    };
    Game.prototype.movePawn = function (row, source, dest, pawn) {
        if (row[dest].occupyingPiece.color == pawn.color) {
            alert("You can't move your pawn to land on one of your own pawns.");
        }
        else {
            this.myBoard.squareArray[source].occupyingPiece = PieceHolder_1.default.NONE;
            row[dest].occupyingPiece = pawn;
            this.myGUI.drawBoardWithPawns();
            this.nextTurn();
        }
    };
    Game.prototype.passedFinalSquare = function (previousIndex, c) {
        var finalSquareOfColor = this.myBoard.getFinalSquareOfColor(this.currentTurnColor);
        if (c == Color_1.Color.RED) {
            if (previousIndex + this.rolledNumber > this.myBoard.squareArray.length) {
                return true;
            }
        }
        else {
            if (finalSquareOfColor >= previousIndex && finalSquareOfColor < previousIndex + this.rolledNumber) {
                return true;
            }
        }
        return false;
    };
    Game.prototype.placeNewPawnOnBoard = function () {
        var startSquare = this.myBoard.getStartingSquareOfColor(this.currentTurnColor);
        this.myBoard.squareArray[startSquare].occupyingPiece = PieceHolder_1.default.returnPieceOfColor(this.currentTurnColor);
        this.myGUI.drawBoardWithPawns();
    };
    Game.prototype.nextTurn = function () {
        if (this.myBoard.getNumberOfPawnsOnEndRowOfColor(this.currentTurnColor) == 4) {
            this.gameOver();
        }
        else {
            this.rolledNumber = 0;
            this.currentTurnColor = this.currentTurnColor == 3 ? 0 : this.currentTurnColor + 1;
            document.getElementById("turnIndicator").innerHTML = Color_1.Color[this.currentTurnColor] + "'s turn";
            document.getElementById("buttonContainer").innerHTML = "<button id='turnButton' onclick=myGame.rollDie() >Roll die!</button>";
            //document.getElementById("turnButton").addEventListener("click", () => myGame.rollDie());
        }
    };
    Game.prototype.gameOver = function () {
        this.myGUI.gameOver(this.currentTurnColor);
    };
    return Game;
}());
var myGame = new Game();
myGame.initialize();
var canvas = document.getElementById("myCanvas");
canvas.addEventListener("mousemove", function (event) { return myGame.mousePosition(event); });
canvas.addEventListener("click", function () { return myGame.choosePawn(); });
document.getElementById("turnButton").addEventListener("click", function () { return myGame.rollDie(); });
window["myGame"] = myGame;


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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map