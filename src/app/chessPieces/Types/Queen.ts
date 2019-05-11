export class Queen implements ChessPiece {
    image: string;
    name = 'queen';
    currentPosition: string;
    color: string;

    constructor(currentPosition: string, color: string) {
        this.currentPosition = currentPosition;
        this.color = color;
        this.image = `../../../../assets/img/${this.name}.png`;
    }
}
