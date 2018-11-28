import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {
  constructor() { }

  getInitialPiece (chessPos: string): string  {
    if (this.IsPawn(chessPos)) {
      return 'pawn';
    }

    return '';
  }

  private IsPawn (chessPos: string): boolean {
    return chessPos[1] === '2' || chessPos[1] === '7';
  }
}
