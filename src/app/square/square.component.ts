import { Component, OnInit, Input } from '@angular/core';
import { NewGameService } from '../new-game.service';
import { Referee } from '../referee';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'square-selector',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input()
  id: string;
  squareClass = 'square ';
  chessPiece: ChessPiece;
  selected: boolean = false;


  constructor(private newGameService: NewGameService) {
  }

  ngOnInit() {
    console.log(`Id is ${this.id}`);    
    this.chessPiece = this.newGameService.getInitialPiece(this.id);

    if (this.chessPiece)
      this.squareClass += this.chessPiece.name
  }

  clickedSquare() {
    console.log(`User clicked on chess square ${this.id}`);
    this.squareClass += ' selected';
  }
}
