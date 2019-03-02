import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  @Input() player: string;

  constructor() { }

  ngOnInit() {
  }

}
