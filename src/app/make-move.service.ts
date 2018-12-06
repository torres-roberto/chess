import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Pawn } from './chessPieces/Pawn';

@Injectable({
  providedIn: 'root'
})
export class MakeMoveService {

  constructor() { }

  Move(from: string, to: string): ChessPiece {
    return new Pawn(to);
  }
}
