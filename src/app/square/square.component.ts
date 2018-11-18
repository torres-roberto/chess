import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() id: string;

  constructor() { }  

  ngOnInit() {
    console.log(`Chess square ${this.id} was created`);    
  }

  clickedSquare() {
    console.log(`User clicked on chess square ${this.id}`)
  }

}
