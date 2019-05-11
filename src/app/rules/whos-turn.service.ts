import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhosTurnService {
  private whosTurn = 'white';

  public makeMove() {
    if (this.whosTurn === 'white') {
      this.whosTurn = 'black';
    } else {
      this.whosTurn = 'white';
    }
  }

  public get() {
    return this.whosTurn;
  }
}
