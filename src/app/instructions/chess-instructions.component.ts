import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chess-instructions',
  templateUrl: './chess-instructions.component.html',
  styleUrls: ['./chess-instructions.component.css']
})
export class ChessInstructionsComponent implements OnInit {

  @Input() player: string;

  constructor() { }

  ngOnInit() {
  }

}
