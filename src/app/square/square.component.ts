import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NewGameService } from '../new-game.service';
import { Referee } from '../referee';
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

  @Output() pieceClicked= new EventEmitter<ChessPiece>();

  chessPiece: ChessPiece;
  selected: boolean = false;

  constructor(private newGameService: NewGameService, private rules: RulesService) {
  }

  ngOnInit() {
    this.chessPiece = this.newGameService.getInitialPiece(this.id);     
    if (this.chessPiece) {
      this.piece.push(this.chessPiece.name)
      this.piece.push(this.chessPiece.color);
    }
  }

  clickedSquare() {
    //console.log(`User clicked on chess square ${this.id}, ${this.piece}`);
    this.pieceClicked.emit(this.chessPiece);
    // if (this.rules.canSelect(this.chessPiece)) {
      
    // }
  }
}
