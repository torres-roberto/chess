export class DefaultPiece implements ChessPiece {
    image = '';
    name = 'empty';
    color = '';

    constructor(currentPosition: string) { 
        this.currentPosition = currentPosition;
    }

    currentPosition: string;
}
