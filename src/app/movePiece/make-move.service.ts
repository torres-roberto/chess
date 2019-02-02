import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Pawn } from '../chessPieces/Pawn';

@Injectable({
  providedIn: 'root'
})
export class MakeMoveService {

  constructor() { }

  static canMakeMove(proposedMove: ProposedMove) {

  }
}
