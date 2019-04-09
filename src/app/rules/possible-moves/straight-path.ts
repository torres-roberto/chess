import { ChessboardService } from './../../chessboard.service';
import { allPositions } from 'src/app/movePiece/position';

export default class StraightPath {
  public static getMoves(chessPiece: ChessPiece,
                   domainChange: number,
                   rangeChange: number,
                   chessBoard: ChessboardService) {
    const possibleMoves = [];

    let possiblePosition = this.getNextPositionOnPath(chessPiece.currentPosition, domainChange, rangeChange);

    while (allPositions.includes(possiblePosition)) {
      const chessPieceAtPosition = chessBoard.whoIsAtPosition(possiblePosition);

      if (chessPieceAtPosition.name === 'empty') {
        possibleMoves.push(possiblePosition);
      } else if (chessPieceAtPosition.color !== chessPiece.color) {
        possibleMoves.push(possiblePosition);
        break;
      } else if (chessPieceAtPosition.color === chessPiece.color) {
        break;
      }

      possiblePosition = this.getNextPositionOnPath(possiblePosition, domainChange, rangeChange);
    }

    return possibleMoves;
  }

  public static getNextPositionOnPath(position: string, domainChange: number, rangeChange: number) {
    const nextPosition = (String.fromCharCode(position[0].charCodeAt(0) + domainChange)) + (parseInt(position[1], 10) + rangeChange);
    return allPositions.includes(nextPosition) ? nextPosition : null;
  }
}
