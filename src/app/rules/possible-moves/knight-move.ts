export class KnightMoves {
  static getPossibleMoves(chessPiece: ChessPiece): string[] {
    const upRight = KnightMoves.getMoves(chessPiece.currentPosition, -2, 1);
    const upLeft = KnightMoves.getMoves(chessPiece.currentPosition, -2, -1);
    const leftUp = KnightMoves.getMoves(chessPiece.currentPosition, -1, -2);
    const leftDown = KnightMoves.getMoves(chessPiece.currentPosition, 1, -2);
    const downLeft = KnightMoves.getMoves(chessPiece.currentPosition, 2, -1);
    const downRight = KnightMoves.getMoves(chessPiece.currentPosition, 2, 1);
    const rightUp = KnightMoves.getMoves(chessPiece.currentPosition, -1, 2);
    const rightDown = KnightMoves.getMoves(chessPiece.currentPosition, 1, 2);

    return [
      upRight,
      upLeft,
      leftUp,
      leftDown,
      downLeft,
      downRight,
      rightUp,
      rightDown
    ];
  }

  static getMoves(position: string, addToRange: number, addToDomain: number) {
    const domain = position[0].charCodeAt(0) + addToDomain;
    const range = parseInt(position[1], 10) + addToRange;
    return String.fromCharCode(domain) + range;
  }
}
