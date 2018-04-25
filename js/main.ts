import GameController from "./GameController";
import GameGUI from "./GameGUI";
import Piece from "./Piece";
import { Bot } from "./Bot";
import { Color } from "./Color";

function init() {
    var gc : GameController = new GameController();
    gc.initialize();
    const bot : Bot = new Bot(Color.BLUE);
    window["gc"] = gc; 
    window["GameGUI"] = GameGUI; 
    gc.rollDie();
    GameGUI.drawGameState(gc.gameState); 

    document.getElementById("myCanvas").addEventListener("click", event => { 
         playTurn(event);
    });

    function playTurn(event) {
        if (gc.checkIfOwnPawnIsClicked(event)) {
            gc.selectAndMovePawnAndMoveToNextTurn();
            GameGUI.drawGameState(gc.gameState);

            if (bot.checkIfAIturnIsNext(gc.gameState.currentTurnColor)) {
                document.getElementById("myCanvas").outerHTML = document.getElementById("myCanvas").outerHTML;
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


