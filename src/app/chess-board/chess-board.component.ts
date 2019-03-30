import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Players } from '../rules/players';
import { RefereeService } from '../services/referee.service';

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
  selectedPieceId: string;
  selectedPiece: ChessPiece;

  constructor(private referee: RefereeService) { }

  ngOnInit() {
    this.nCols = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    this.nRows = [ '1', '2', '3', '4', '5', '6', '7', '8'];
    console.log(`Game has begun! Waiting for Player [${this.player}]\'s move`);
  }

  public clickedSquare(chessPiece: ChessPiece) {
    if (this.isSelection(chessPiece.color)) {
      this.selectedPiece = {...chessPiece};
      console.log('is selection');
      this.pieceWasSelected = true;
      this.selectedPieceId = chessPiece.currentPosition;
    } else if (this.isMove(chessPiece.color)) {
      console.log('valid move');
      this.pieceWasSelected = false;
      this.whosTurn = this.whosTurn === 'white' ? 'black' : 'white';
      this.referee.moveMade.next({piece: {...this.selectedPiece}, from: this.selectedPieceId, to: chessPiece.currentPosition});
    }
  }

  private isSelection(playerColor) {
    return !this.pieceWasSelected && this.whosTurn === playerColor;
  }

  private isMove(playerColor) {
    return this.pieceWasSelected && this.whosTurn !== playerColor;
  }
}
