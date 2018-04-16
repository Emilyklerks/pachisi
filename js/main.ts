import GameController from "./GameController";
import GameGUI from "./GameGUI";

export default function main(): void { 
    const gc : GameController = new GameController();
    gc.initialize();
    gc.rollDie();
    document.getElementById("myCanvas").addEventListener("click", event => { gc.clickOnBoardToChoosePawn(event); });
    window.setInterval(maindraw, 200);
    window["gc"] = gc;

    function maindraw() : void {
        GameGUI.drawGameState(gc.gameState);
    }
}

main();
