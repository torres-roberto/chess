import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Pawn } from '../chessPieces/Pawn';

@Injectable({
  providedIn: 'root'
})
export class MakeMoveService {

  constructor() { }

  static canMakeMove(proposedMove: Move): boolean {
    if (MakeMoveService.isValidSelection(proposedMove) &&
        MakeMoveService.isValidTarget(proposedMove)) {
      return true;
    }

    return false;
  }

  private static isValidSelection(proposedMove: Move): boolean {
    if (proposedMove.selectedPosition.occupyingPiece === null ||
        proposedMove.selectedPosition.occupyingPiece.color !== proposedMove.situation.whosTurn) {
      console.log(`Must select a position with a [${proposedMove.situation.whosTurn}] piece`);
      return true;
    }
    return true;        
  }

  private static isValidTarget(proposedMove: Move): boolean {    
    return true;
  }
}
