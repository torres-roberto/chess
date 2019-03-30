import { DefaultPiece } from './../chessPieces/DefaultPiece';
import { RefereeService } from './../services/referee.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NewGameService } from '../services/new-game.service';
import { RulesService } from '../rules/rules.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chess-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() id: string;
  @Input() piece: string[] = ['square'];

  @Output() pieceClicked = new EventEmitter<ChessPiece>();

  chessPiece: ChessPiece;
  selected = false;

  constructor(private newGameService: NewGameService,
              private rules: RulesService,
              private referee: RefereeService) {
  }

  ngOnInit() {
    this.chessPiece = this.newGameService.getInitialPiece(this.id);
    if (this.chessPiece) {
      this.piece.push(this.chessPiece.name);
      this.piece.push(this.chessPiece.color);
      this.referee.moveMade.subscribe(move => this.moveMadeHandler(move));
    }
  }

  private moveMadeHandler(move: {piece, from, to}) {
    if (move.to === this.id) {
      console.log(move.piece);
      this.piece = ['square', move.piece.name, move.piece.color];
      const chessPiece = {...move.piece};
      chessPiece.currentPosition = move.to;
      this.chessPiece = chessPiece;
    }

    if (move.from === this.id) {
      console.log('erasing piece from old square');
      this.chessPiece = new DefaultPiece(this.id);
      this.piece = ['square', this.chessPiece.name, this.chessPiece.color];
    }
  }

  clickedSquare() {
    this.pieceClicked.emit(this.chessPiece);
  }
}
