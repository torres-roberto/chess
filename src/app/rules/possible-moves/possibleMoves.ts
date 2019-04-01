import { KnightMoves } from './knight-move';
export class PossibleMoves {
  static getPossibleMoves(chessPiece: ChessPiece): string[] {
    switch (chessPiece.name) {
      case 'knight':
        return KnightMoves.getPossibleMoves(chessPiece);
      default:
        console.log(`Invalid piece - Cannot get possible moves for piece of type [${chessPiece.name}]`);
        return null;
    }
  }
}
