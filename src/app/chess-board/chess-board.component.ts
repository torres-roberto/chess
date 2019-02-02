import { Component, OnInit, Input } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {  
  selectedSquare: ChessPosition;  

  nCols: string[];
  nRows: string[];

  constructor() { }

  ngOnInit() {
    this.nCols = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    this.nRows = [ '1', '2', '3', '4', '5', '6', '7', '8'];
  }

  clickedSquare(chessSquare) {            
    if (!this.selectedSquare && chessSquare.chessPiece.name !== 'empty') {
      this.selectedSquare = {
        id: chessSquare.id as string,
        chessPiece: chessSquare.piece as string
      };
      console.log(`you are chosen, piece ${this.selectedSquare.id}, ${this.selectedSquare.chessPiece}`);
    }
    else if (chessSquare.chessPiece.name === 'empty' && this.selectedSquare) {
      chessSquare.piece = this.selectedSquare.chessPiece;
      chessSquare.chessPiece = this.selectedSquare.chessPiece;   
      console.log(`you are targetted, piece ${chessSquare.id}, ${chessSquare.piece}`);
      this.selectedSquare = null;
    }
    else {      
      console.log(`Invalid chess square was chosen square id [${chessSquare.id}]`);
      this.selectedSquare = null;
    }
  }
}
