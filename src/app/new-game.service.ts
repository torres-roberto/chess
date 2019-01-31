import { Injectable } from '@angular/core';
import { Pawn } from './chessPieces/Pawn';
import { DefaultPiece } from './chessPieces/DefaultPiece';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {
  constructor() { }

  getInitialPiece (chessPos: string): ChessPiece  {
    if (this.IsPawn(chessPos)) {
      return new Pawn(chessPos);      
    }

    return new DefaultPiece(chessPos);
  }

  private IsPawn (chessPos: string): boolean {
    return chessPos[1] === '2' || chessPos[1] === '7';
  }

  
}
