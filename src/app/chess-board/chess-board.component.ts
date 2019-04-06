import { MakeMoveService } from './../movePiece/make-move.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RefereeService } from '../services/referee.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
  selectedSquare: ChessPosition;
  whosTurn = 'white';
  pieceWasSelected = false;

  @Input() player: string;
  @Output() moveMade = new EventEmitter<string>();

  nCols: string[];
  nRows: string[];
  selectedPiece: ChessPiece;

  constructor(private referee: RefereeService,
              private makeMove: MakeMoveService) { }

  ngOnInit() {
    this.nCols = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    this.nRows = [ '1', '2', '3', '4', '5', '6', '7', '8'];
    console.log(`Game has begun! Waiting for Player [${this.player}]\'s move`);
  }

  public clickedSquare(chessPiece: ChessPiece) {
    if (this.isSelection(chessPiece)) {
      this.selectedPiece = {...chessPiece};
      this.pieceWasSelected = true;
    } else if (this.isMove(chessPiece)) {
      this.pieceWasSelected = false;
      this.whosTurn = this.whosTurn === 'white' ? 'black' : 'white';
      this.moveMade.emit(this.whosTurn);
      this.makeMove.moveMade.next({
        piece: {...this.selectedPiece},
        from: this.selectedPiece.currentPosition,
        to: chessPiece.currentPosition});
    }
  }

  private isSelection(chessPiece: ChessPiece) {
    return this.whosTurn === chessPiece.color;
  }

  private isMove(chessPiece: ChessPiece) {
    return this.pieceWasSelected &&
      this.whosTurn !== chessPiece.color &&
      this.referee.canMove(this.selectedPiece, chessPiece.currentPosition);
  }
}
