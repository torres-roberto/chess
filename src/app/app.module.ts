import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
   declarations: [
      AppComponent,
      SquareComponent,
      ChessBoardComponent,
      InstructionsComponent,
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
