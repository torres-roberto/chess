import { DefaultPiece } from './chessPieces/DefaultPiece';
import { NewGameService } from './services/new-game.service';
import { Injectable } from '@angular/core';
import { allPositions } from './movePiece/position';
import { MakeMoveService } from './movePiece/make-move.service';

@Injectable({
  providedIn: 'root'
})
export class ChessboardService {
  public chessBoard = new Map<string, ChessPiece>();

  constructor(private newGameService: NewGameService,
              private makeMove: MakeMoveService) {
      this.makeMove.moveMade.subscribe(move => {
      this.chessBoard.set(move.to, {...move.piece});
      this.chessBoard.set(move.from, new DefaultPiece(move.from));
    });

  }

  whoIsAtPosition(position: string) {
    return this.chessBoard.get(position);
  }

  adjustChessBoard(chessPiece: ChessPiece) {
    this.chessBoard.set(chessPiece.currentPosition, chessPiece);
  }

  public getInitialChessBoard(): Map<string, ChessPiece> {
    const newChessBoard =  new Map<string, ChessPiece>();

    allPositions.forEach(position => {
      const chessPiece = this.newGameService.getInitialPiece(position);
      newChessBoard.set(position, chessPiece);
    });

    return newChessBoard;
  }
}
