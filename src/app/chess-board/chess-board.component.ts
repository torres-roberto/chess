import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Players } from '../rules/players';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {  
  selectedSquare: ChessPosition;  
  whosTurn: string = 'white';
  pieceWasSelected = false;

  @Input() player: string;

  nCols: string[];
  nRows: string[];

  constructor() { }

  ngOnInit() {
    this.nCols = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    this.nRows = [ '1', '2', '3', '4', '5', '6', '7', '8'];
    console.log(`Game has begun! Waiting for Player [${this.player}]\'s move`);    
  }

  // clickedSquare(chessSquare) {            
  //   if (this.pickedValidStartSpot(chessSquare)) {
  //     this.selectedSquare = {
  //       id: chessSquare.id as string,
  //       chessPiece: chessSquare.piece as string
  //     };
  //     console.log(`you are chosen, piece ${this.selectedSquare.id}, ${this.selectedSquare.chessPiece}`);
  //   }
  //   else if (this.pickedValidEndSpot(chessSquare)) {
  //     chessSquare.piece = this.selectedSquare.chessPiece;
  //     chessSquare.chessPiece = this.selectedSquare.chessPiece;   
  //     console.log(`you are targetted, piece ${chessSquare.id}, ${chessSquare.piece}`);
  //     this.selectedSquare = null;
      
  //     for (let prop in chessSquare) {
  //       if (chessSquare.hasOwnProperty(prop)) {
  //         console.log(prop + ': ' + chessSquare[prop]);
  //       }
  //     }

  //     // this.player = this.player === 'white' ? 'black' : 'white';
  //   }
  //   else {      
  //     console.log(`Invalid chess square was chosen square id [${chessSquare.id}]`);
  //     for (let prop in chessSquare) {
  //       if (chessSquare.hasOwnProperty(prop)) {
  //         console.log(prop + ': ' + chessSquare[prop]);
  //       }
  //     }
  //     this.selectedSquare = null;
  //   }
  //   console.log('player: ' + this.player);
  // }

  public clickedSquare(chessPiece: ChessPiece) {
    if (this.isSelection(chessPiece.color)) {
      this.pieceWasSelected = true;
      console.log('this is a selection');
    } else if (this.isMove(chessPiece.color)) {
      this.pieceWasSelected = false;
      this.whosTurn = this.whosTurn === 'white' ? 'black' : 'white';
      
    }
    console.log(chessPiece);
  }

  private isSelection(playerColor) {
    return !this.pieceWasSelected && this.whosTurn === playerColor;
  }

  private isMove(playerColor) {
    return this.pieceWasSelected && this.whosTurn !== playerColor;
  }

  private pickedValidStartSpot(chessSquare) {    
    // for (let prop in chessSquare) {
    //   if (chessSquare.hasOwnProperty(prop)) {
    //     console.log(prop + ': ' + chessSquare[prop]);

    //     if (prop === 'chessPiece') {
    //       for (let p in chessSquare.chessPiece) {
    //         if (chessSquare.chessPiece.hasOwnProperty(p))
    //           console.log('more' + p + ': ' + chessSquare[prop][p]);
    //       }
    //     }
    //   }
    // }


    return !this.selectedSquare && 
            (chessSquare.chessPiece.name !== 'empty' || chessSquare.chessPiece[1] !== 'empty') &&             
            (chessSquare.chessPiece.color === this.player || chessSquare.chessPiece[2] === this.player);
  }

  private pickedValidEndSpot(chessSquare) {
    return chessSquare.chessPiece.name === 'empty' && this.selectedSquare;
  }
}
