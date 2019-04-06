import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class KnightMoves {
  getPossibleMoves(chessPiece: ChessPiece): string[] {
    const upRight = this.getMoves(chessPiece.currentPosition, -2, 1);
    const upLeft = this.getMoves(chessPiece.currentPosition, -2, -1);
    const leftUp = this.getMoves(chessPiece.currentPosition, -1, -2);
    const leftDown = this.getMoves(chessPiece.currentPosition, 1, -2);
    const downLeft = this.getMoves(chessPiece.currentPosition, 2, -1);
    const downRight = this.getMoves(chessPiece.currentPosition, 2, 1);
    const rightUp = this.getMoves(chessPiece.currentPosition, -1, 2);
    const rightDown = this.getMoves(chessPiece.currentPosition, 1, 2);

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

  private getMoves(position: string, addToRange: number, addToDomain: number) {
    const domain = position[0].charCodeAt(0) + addToDomain;
    const range = parseInt(position[1], 10) + addToRange;
    return String.fromCharCode(domain) + range;
  }
}
