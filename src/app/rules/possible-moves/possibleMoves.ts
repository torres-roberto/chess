import { KnightMoves } from './knight-move';
import { PawnMoves } from './pawn-move';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PossibleMoves {
  constructor(private pawnMoves: PawnMoves,
              private knightMoves: KnightMoves
  ) {}

  getPossibleMoves(chessPiece: ChessPiece): string[] {
    switch (chessPiece.name) {
      case 'knight':
        return this.knightMoves.getPossibleMoves(chessPiece);
      case 'pawn':
        return this.pawnMoves.getPossibleMoves(chessPiece);
      default:
        console.log(`Invalid piece - Cannot get possible moves for piece of type [${chessPiece.name}]`);
        return null;
    }
  }
}
