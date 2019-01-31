import { Component, OnInit, Input } from '@angular/core';
import { NewGameService } from '../new-game.service';
import { Referee } from '../referee';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chess-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() id: string;
  @Input() piece: string[] = ['square'];

  chessPiece: ChessPiece;
  selected: boolean = false;

  constructor(private newGameService: NewGameService) {
  }

  ngOnInit() {    
    this.chessPiece = this.newGameService.getInitialPiece(this.id);     
    this.piece.push(this.chessPiece.name);
  }

  clickedSquare() {
    console.log(`User clicked on chess square ${this.id}, ${this.piece}`);
  }
}
