import Board from "./Board";
import { Color } from "./Color";
import PieceHolder from "./PieceHolder";

export default class GUI {
    boardToBeDrawn: Board;

    constructor(b : Board) {
        this.boardToBeDrawn = b;
    }

    public drawBoardWithPawns(): void {
        var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");  
        var ctx = canvas.getContext("2d"); 

        //Draw the normal board
        for (var i = 0; i < this.boardToBeDrawn.squareArray.length; i++) {
            let thisSquare = this.boardToBeDrawn.squareArray[i];
            
            ctx.fillStyle = "white";

            if (thisSquare.isStartingSquareOfColor == Color.RED) {
                ctx.fillStyle = "pink";
            } else if (thisSquare.isStartingSquareOfColor == Color.BLUE) {
                ctx.fillStyle = "lightblue";
            } else if (thisSquare.isStartingSquareOfColor == Color.YELLOW) {
                ctx.fillStyle = "lightyellow";
            } else if (thisSquare.isStartingSquareOfColor == Color.GREEN) {
                ctx.fillStyle = "lightgreen";
            }
            ctx.beginPath();
            ctx.fillRect(thisSquare.xPos, thisSquare.yPos, 50, 50);          
            ctx.strokeRect(thisSquare.xPos, thisSquare.yPos, 50, 50);
            ctx.stroke();
                   

            //draw the Pieces
            if (thisSquare.occupyingPiece != PieceHolder.NONE) {
                ctx.beginPath();
                ctx.arc(thisSquare.xPos+25,thisSquare.yPos+25,20,0,2*Math.PI);
                ctx.fillStyle = thisSquare.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
        }
        
        //Draw the final 4 squares of each color
        for (var i = 0; i <4; i++) {
            let red = this.boardToBeDrawn.redSquareArray[i];
            let blue = this.boardToBeDrawn.blueSquareArray[i];
            let green = this.boardToBeDrawn.greenSquareArray[i];
            let yellow = this.boardToBeDrawn.yellowSquareArray[i];

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
            if (red.occupyingPiece!= PieceHolder.NONE) {
                ctx.beginPath();
                ctx.arc(red.xPos+25,red.yPos+25,20,0,2*Math.PI);
                ctx.fillStyle = red.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }

            if (blue.occupyingPiece!= PieceHolder.NONE) {
                ctx.beginPath();
                ctx.arc(blue.xPos+25,blue.yPos+25,20,0,2*Math.PI);
                ctx.fillStyle = blue.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
            if (green.occupyingPiece!= PieceHolder.NONE) {
                ctx.beginPath();
                ctx.arc(green.xPos+25,green.yPos+25,20,0,2*Math.PI);
                ctx.fillStyle = green.occupyingPiece.colorString;
                ctx.fill();
                ctx.stroke();
            }
            if (yellow.occupyingPiece!= PieceHolder.NONE) {
                ctx.beginPath();
                ctx.arc(yellow.xPos+25,yellow.yPos+25,20,0,2*Math.PI);
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
    }
    
    public gameOver(c : Color) {
        var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");  
        var ctx = canvas.getContext("2d"); 
        ctx.font = "30px Arial";
        let str = Color[c].toString; 
        ctx.fillText(str + " wins!",300,50); 
    }
}