export class Pawn implements ChessPiece {
    image = '../../../../assets/img/pawn-white.png';
    name = 'pawn';

    constructor(currentPosition: string) { 
        this.currentPosition = currentPosition;
    }

    currentPosition: string;
}
