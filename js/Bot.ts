import { Color } from "./Color";
import GameState from "./GameState";
import GameController from "./GameController";

export class Bot {
    aiColor : Color;

    constructor(c : Color) {
        this.aiColor = c;
    }

    public checkIfAIturnIsNext(turnColor: Color): boolean {
        if (turnColor == this.aiColor) {
            return true;
        }
        return false;
    }

    public handleTurn(myGc : GameController): GameController {
        if(myGc.gameState.myBoard.getNumberOfPawnsOnBoardOfColor(Color.BLUE) == 0) {
            myGc = this.clickOk(myGc);
        } else {
            let chosenPawn = this.decideMove(myGc.gameState);
            myGc.assignPawnClick(chosenPawn);
            myGc.selectAndMovePawnAndMoveToNextTurn();
        }
        return myGc;
    }

    public clickOk(myGc : GameController): GameController {
        myGc.moveToNextTurn()
        return myGc;
    }

    public decideMove(gs: GameState): number {
        let pawns = gs.myBoard.getIndicesPawnsOnBoardOfColor(this.aiColor);

        if (pawns.length == 1) {
            console.log("the index of the first pawn is:" + pawns[0]);
            return pawns[0];

        } else {
            for (let pawn of pawns) {
                console.log(pawns);
                console.log("rolled number" + gs.rolledNumber);
                let resultingPos = pawn + gs.rolledNumber;
                let colorOnResultPos = gs.myBoard.squareArray[resultingPos].occupyingPiece.color;
                if ( colorOnResultPos != Color.NONE && colorOnResultPos != this.aiColor) {
                    return pawn;
                }
            }
            return pawns[pawns.length-1];
        }
    }

    private delay(milliseconds: number) {
        return new Promise<void>(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
}