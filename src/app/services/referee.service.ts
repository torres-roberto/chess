import { PossibleMoves } from './../rules/possible-moves/possibleMoves';
import { Rule } from './../rules/rule.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OutOfBoundsRule } from '../rules/outofbounds.rule';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {
  constructor(private possibleMoves: PossibleMoves) {
  }

  canMove(chessPiece: ChessPiece, destination: string) {
    const possibleMoves = this.possibleMoves.getPossibleMoves(chessPiece);
    return possibleMoves.includes(destination);
  }
}
