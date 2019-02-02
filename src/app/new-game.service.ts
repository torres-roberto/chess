import { Injectable } from '@angular/core';
import { Pawn } from './chessPieces/Pawn';
import { DefaultPiece } from './chessPieces/DefaultPiece';
import { Knight } from './chessPieces/Types/Knight';
import { Bishop } from './chessPieces/Types/Bishop';
import { Rook } from './chessPieces/Types/Rook';
import { Queen } from './chessPieces/Types/Queen';
import { King } from './chessPieces/Types/King';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {  
  getInitialPiece (chessPos: string): ChessPiece  {
    let color = chessPos[1] < '3' ? 'black' : 'white';
    
    if (NewGameService.isPawn(chessPos)) {
      return new Pawn(chessPos, color);
    }
    else if (NewGameService.isKnight(chessPos)) {
      return new Knight(chessPos, color);
    }
    else if (NewGameService.isBishop(chessPos)) {
      return new Bishop(chessPos, color);
    }
    else if (NewGameService.isRook(chessPos)) {
      return new Rook(chessPos, color);
    }
    else if (NewGameService.isQueen(chessPos)) {
      return new Queen(chessPos, color);
    }
    else if (NewGameService.isKing(chessPos)) {
      return new King(chessPos, color);
    }

    return new DefaultPiece(chessPos);
  }

  private static isPawn (chessPos: string): boolean {
    return chessPos[1] === '2' || chessPos[1] === '7';
  }

  private static isKnight(chessPos: string): boolean {
    return (chessPos[0] === 'b' && chessPos[1] === '1') ||
           (chessPos[0] === 'g' && chessPos[1] === '1') ||
           (chessPos[0] === 'b' && chessPos[1] === '8') ||
           (chessPos[0] === 'g' && chessPos[1] === '8');
  }

  private static isBishop(chessPos: string): boolean {
    return (chessPos[0] === 'c' && chessPos[1] === '1') ||
           (chessPos[0] === 'f' && chessPos[1] === '1') ||
           (chessPos[0] === 'c' && chessPos[1] === '8') ||
           (chessPos[0] === 'f' && chessPos[1] === '8');
  }

  private static isRook(chessPos: string): boolean {
    return (chessPos[0] === 'a' && chessPos[1] === '1') ||
           (chessPos[0] === 'h' && chessPos[1] === '1') ||
           (chessPos[0] === 'a' && chessPos[1] === '8') ||
           (chessPos[0] === 'h' && chessPos[1] === '8');    
  }

  private static isQueen(chessPos: string): boolean {
    return (chessPos[0] === 'd' && chessPos[1] === '1') ||           
           (chessPos[0] === 'd' && chessPos[1] === '8')             
  }

  private static isKing(chessPos: string): boolean {
    return (chessPos[0] === 'e' && chessPos[1] === '1') ||           
           (chessPos[0] === 'e' && chessPos[1] === '8')           
  }
}
