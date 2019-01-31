export class DefaultPiece implements ChessPiece {
    image = '';
    name = 'empty';

    constructor(currentPosition: string) { 
        this.currentPosition = currentPosition;
    }

    currentPosition: string;
}
