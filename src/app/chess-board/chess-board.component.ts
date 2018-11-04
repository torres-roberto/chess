import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {

  nCols : number[];
  nRows : number[];
  
  constructor() { }

  ngOnInit() {
    this.nCols = [1,2,3,4,5,6,7,8];
    this.nRows = [1,2,3,4,5,6,7,8];
  }

}
