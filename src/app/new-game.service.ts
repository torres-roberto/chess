import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {

  constructor() { }

  getInitialPiece (chessPos: ChessPosition): ChessPiece  {
    console.log('here');
    return null;
  }
}
