import { Rule } from './rule.interface';
import { allPositions } from '../movePiece/position';
import { PossibleMoves } from './possible-moves/possibleMoves';

export class OutOfBoundsRule implements Rule {
  constructor(private possibleMoves: PossibleMoves) {}

  followsRule(chessPiece): boolean {
    const possibleMoves = this.possibleMoves.getPossibleMoves(chessPiece);
    return allPositions.some(p => possibleMoves.includes(p));
  }
}
