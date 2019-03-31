import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {
  moveMade: Subject<{piece: ChessPiece, from, to}> = new Subject();

  constructor() { }

  canSelect(chessPiece: ChessPiece): boolean {
    return true;
  }
}
