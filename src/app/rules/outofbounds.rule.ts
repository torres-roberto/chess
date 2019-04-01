import { Rule } from './rule.interface';
import { allPositions } from '../movePiece/position';
import { PossibleMoves } from './possible-moves/possibleMoves';

export class OutOfBoundsRule implements Rule {
  constructor(private chessPiece: ChessPiece) {}

  followsRule(): boolean {
    const possibleMoves = PossibleMoves.getPossibleMoves(this.chessPiece);
    return allPositions.some(p => possibleMoves.includes(p));
  }
}
