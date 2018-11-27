import { Component, OnInit, Input } from '@angular/core';
import { NewGameService } from '../new-game.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'square-selector',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input()
  id: string;
  squareClass = 'square';
  chessPiece: ChessPiece;


  constructor(private newGameService: NewGameService) {
  }

  ngOnInit() {
    console.log(`Id is ${this.id}`);
    this.squareClass = 'square';
    //console.log(ChessPosition[this.id]);
    //this.chessPiece = this.newGameService.getInitialPiece(ChessPosition[this.id]);
  }

  clickedSquare() {
    console.log(`User clicked on chess square ${this.id}`);
  }
}
