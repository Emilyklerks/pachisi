import GameController from "./GameController";
import GameGUI from "./GameGUI";
import Piece from "./Piece";

function init() {
    const gc : GameController = new GameController();
    gc.initialize();
    window["gc"] = gc; 
    window["GameGUI"] = GameGUI; 
    gc.rollDie();
    GameGUI.drawGameState(gc.gameState); 
    document.getElementById("myCanvas").addEventListener("click", event => { 
        if (gc.checkIfOwnPawnIsClicked(event)) {
            gc.selectAndMovePawn();
            GameGUI.drawGameState(gc.gameState);
        } 
    });
}

init();


