export class Pawn implements ChessPiece {
    image: string;
    name = 'pawn';
    currentPosition: string;
    color: string;

    constructor(currentPosition: string, color: string) {
        this.currentPosition = currentPosition;
        this.color = color;
        this.image = `../../../../assets/img/pawn.png`;
    }
}
