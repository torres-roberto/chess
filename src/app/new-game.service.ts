import { Injectable } from '@angular/core';
import { Pawn } from './chessPieces/Pawn';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {
  constructor() { }

  getInitialPiece (chessPos: string): ChessPiece  {
    if (this.IsPawn(chessPos)) {
      return new Pawn(chessPos);      
    }

    return null;
  }

  private IsPawn (chessPos: string): boolean {
    return chessPos[1] === '2' || chessPos[1] === '7';
  }
}
