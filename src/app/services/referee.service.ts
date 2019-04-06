import { PossibleMoves } from './../rules/possible-moves/possibleMoves';
import { Rule } from './../rules/rule.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OutOfBoundsRule } from '../rules/outofbounds.rule';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {
  // moveMade: Subject<{piece: ChessPiece, from, to}> = new Subject();

  constructor(private possibleMoves: PossibleMoves) { }

  private getRules(chessPiece: ChessPiece): Rule[] {
    switch(chessPiece.name) {
      case 'knight':
        return [
          //new OutOfBoundsRule()
        ];
      case 'pawn':
        return [
          //new OutOfBoundsRule(chessPiece)
        ]
      default:
        return [];
    }
  }

  // canSelect(chessPiece: ChessPiece): boolean {
  //   const rules = this.getRules(chessPiece);
  //   return !rules.some((r: Rule) => !r.followsRule());
  // }

  canMove(chessPiece: ChessPiece, destination: string) {
    const possibleMoves = this.possibleMoves.getPossibleMoves(chessPiece);
    return possibleMoves.includes(destination);
  }
}
