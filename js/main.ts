import GameController from "./GameController";

export default function main(): void { 
    const gc : GameController = new GameController();
    gc.initialize();
    gc.iterateTurns();
    document.getElementById("myCanvas").addEventListener("click", event => { gc.clickOnBoardToChoosePawn(event); });
    window["gc"] = gc;
}

main();
