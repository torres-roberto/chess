import { allPositions } from './../../movePiece/position';
import { ChessboardService } from './../../chessboard.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BishopMoves {
  constructor(private chessBoard: ChessboardService) {}

  getPossibleMoves(chessPiece: ChessPiece): string[] {
    const upLeftDiagonal = this.getMoves(chessPiece, -1, 1);
    const upRightDiagonal = this.getMoves(chessPiece, 1, 1);
    const downLeftDiagonal = this.getMoves(chessPiece, -1, -1);
    const downRightDiagonal = this.getMoves(chessPiece, 1, -1);

    return [
      ...upLeftDiagonal,
      ...upRightDiagonal,
      ...downLeftDiagonal,
      ...downRightDiagonal
    ];
  }

  private getMoves(chessPiece: ChessPiece, domainChange: number, rangeChange: number) {
    const possibleMoves = [];

    let possiblePosition = this.getNextDiagonal(chessPiece.currentPosition, domainChange, rangeChange);

    while (allPositions.includes(possiblePosition)) {
      const chessPieceAtPosition = this.chessBoard.whoIsAtPosition(possiblePosition);

      if (chessPieceAtPosition.name === 'empty') {
        possibleMoves.push(possiblePosition);
      } else if (chessPieceAtPosition.color !== chessPiece.color) {
        possibleMoves.push(possiblePosition);
        break;
      } else if (chessPieceAtPosition.color === chessPiece.color) {
        break;
      }

      possiblePosition = this.getNextDiagonal(possiblePosition, domainChange, rangeChange);
    }

    return possibleMoves;
  }

  private getNextDiagonal(position: string, domainChange: number, rangeChange: number) {
    return (String.fromCharCode(position[0].charCodeAt(0) + domainChange)) + (parseInt(position[1], 10) + rangeChange);
  }
}
