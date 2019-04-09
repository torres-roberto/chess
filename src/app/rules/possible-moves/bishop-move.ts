import { ChessboardService } from './../../chessboard.service';
import { Injectable } from '@angular/core';
import StraightPath from './straight-path';

@Injectable({
  providedIn: 'root'
})
export class BishopMoves {
  constructor(private chessBoard: ChessboardService) {}

  getPossibleMoves(chessPiece: ChessPiece): string[] {
    const upLeftDiagonal = StraightPath.getMoves(chessPiece, -1, 1, this.chessBoard);
    const upRightDiagonal = StraightPath.getMoves(chessPiece, 1, 1, this.chessBoard);
    const downLeftDiagonal = StraightPath.getMoves(chessPiece, -1, -1, this.chessBoard);
    const downRightDiagonal = StraightPath.getMoves(chessPiece, 1, -1, this.chessBoard);

    return [
      ...upLeftDiagonal,
      ...upRightDiagonal,
      ...downLeftDiagonal,
      ...downRightDiagonal
    ];
  }
}
