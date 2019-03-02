import { Injectable } from '@angular/core';
import { WhosTurnService } from './whos-turn.service';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor(private whosTurn: WhosTurnService) {}

  canSelect(chessPiece: ChessPiece): boolean {
    if (this.whosTurn.get() === chessPiece.color) {
      return true;
    }
    return false;
  }
}
