import { allPositions } from './../../movePiece/position';
import { ChessboardService } from './../../chessboard.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PawnMoves {
  constructor(private chessBoard: ChessboardService) {}

  getPossibleMoves(chessPiece: ChessPiece): string[] {
    const direction = chessPiece.color === 'white' ? -1 : 1;
    const rowDestination = +chessPiece.currentPosition[1] + direction;
    const straightAhead = chessPiece.currentPosition[0] + rowDestination;
    const leftAhead = String.fromCharCode(chessPiece.currentPosition[0].charCodeAt(0) - 1) + rowDestination;
    const rightAhead = String.fromCharCode(chessPiece.currentPosition[0].charCodeAt(0) + 1) + rowDestination;

    const possibleMoves = [];

    if (this.isValidPosition(straightAhead) &&
        this.isVacantPosition(straightAhead)
    ) {
      possibleMoves.push(straightAhead);
    }

    if (this.isValidPosition(leftAhead) &&
        this.isEnemyThereToTake(leftAhead, chessPiece.color)
    ) {
      possibleMoves.push(leftAhead);
    }

    if (this.isValidPosition(rightAhead) &&
        this.isEnemyThereToTake(rightAhead, chessPiece.color)
    ) {
      possibleMoves.push(rightAhead);
    }

    return possibleMoves;
  }

  isValidPosition(position: string): boolean {
    return allPositions.includes(position);
  }

  isVacantPosition(position: string): boolean {
    const chessPieceAtPosition: ChessPiece = this.chessBoard.whoIsAtPosition(position);
    return chessPieceAtPosition.name === 'empty';
  }

  isEnemyThereToTake(position: string, chessPieceColor: string): boolean {
    const chessPieceAtPosition: ChessPiece = this.chessBoard.whoIsAtPosition(position);
    const enemyChessPiece = chessPieceColor === 'white' ? 'black' : 'white';
    return chessPieceAtPosition.color === enemyChessPiece;
  }
}
