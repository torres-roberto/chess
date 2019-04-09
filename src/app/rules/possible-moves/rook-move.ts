import { ChessboardService } from './../../chessboard.service';
import { Injectable } from '@angular/core';
import StraightPath from './straight-path';

@Injectable({
  providedIn: 'root'
})
export class RookMoves {
  constructor(private chessBoard: ChessboardService) {}

  getPossibleMoves(chessPiece: ChessPiece): string[] {
    const up = StraightPath.getMoves(chessPiece, 0, 1, this.chessBoard);
    const down = StraightPath.getMoves(chessPiece, 0, -1, this.chessBoard);
    const left = StraightPath.getMoves(chessPiece, -1, 0, this.chessBoard);
    const right = StraightPath.getMoves(chessPiece, 1, 0, this.chessBoard);

    return [
      ...up,
      ...down,
      ...left,
      ...right
    ];
  }
}
