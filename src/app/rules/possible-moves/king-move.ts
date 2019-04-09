import { ChessboardService } from './../../chessboard.service';
import { Injectable } from '@angular/core';
import StraightPath from './straight-path';

@Injectable({
  providedIn: 'root'
})
export class KingMoves {
  constructor(private chessBoard: ChessboardService) {}

  getPossibleMoves(chessPiece: ChessPiece): string[] {
    function getNextPositionOnPath(domain: number, range: number) {
      return StraightPath.getNextPositionOnPath(chessPiece.currentPosition, domain, range)
    }

    const up = getNextPositionOnPath(0, 1);
    const down = getNextPositionOnPath(0, -1);
    const left = getNextPositionOnPath(-1, 0);
    const right = getNextPositionOnPath(1, 0);

    const upLeft = getNextPositionOnPath(-1, 1);
    const upRight = getNextPositionOnPath(1, 1);
    const downLeft = getNextPositionOnPath(-1, -1);
    const downRight = getNextPositionOnPath(1, -1);

    return [
      up,
      down,
      left,
      right,
      upLeft,
      upRight,
      downLeft,
      downRight
    ].filter(position => {
      const pieceAtPosition = this.chessBoard.whoIsAtPosition(position);
      return position !== null && (pieceAtPosition.name === 'empty' || pieceAtPosition.color !== chessPiece.color);
    });
  }
}
