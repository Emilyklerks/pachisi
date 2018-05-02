import GameController from "./GameController";
import GameGUI from "./GameGUI";
import Piece from "./Piece";
import { Bot } from "./Bot";
import { Color } from "./Color";
import Board from "./Board";
import GameState from "./GameState";

function init() {
    let board : Board = new Board();
    let gameState = new GameState(board, Color.RED);
    const bot : Bot = new Bot(Color.BLUE);
    var gc : GameController = new GameController(gameState);
    gc.rollDie();
    
    window["gc"] = gc; 
    window["GameGUI"] = GameGUI; 
    GameGUI.drawGameState(gc.gameState); 

    document.getElementById("myCanvas").addEventListener("click", event => { 
         playTurn(event);
    });

    function playTurn(event) {
        if (gc.checkIfOwnPawnIsClicked(event)) {
            gc.selectAndMovePawnAndMoveToNextTurn();
            GameGUI.drawGameState(gc.gameState);

            if (bot.checkIfAIturnIsNext(gc.gameState.currentTurnColor)) {
                document.getElementById("myCanvas").outerHTML = document.getElementById("myCanvas").outerHTML; //removes the listeners of the canvas object
                GameGUI.drawGameState(gc.gameState);
                delay(1000).then(
                    () => {gc = bot.handleTurn(gc),
                            GameGUI.drawGameState(gc.gameState)
                            document.getElementById("myCanvas").addEventListener("click", event => { 
                                playTurn(event);
                           });
                    })
            }
        }
    }

    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}

init();


