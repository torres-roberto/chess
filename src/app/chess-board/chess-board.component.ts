import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {

  nCols : string[];
  nRows : string[];
  
  constructor() { }

  ngOnInit() {
    this.nCols = ['a','b','c','d','e','f','g','h'];
    this.nRows = ['1','2','3','4','5','6','7','8'];
  }

}
