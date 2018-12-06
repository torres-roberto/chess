export class Pawn implements ChessPiece {
    canMove(): boolean {
        return true;
    }
    image = '../../../../assets/img/pawn-white.png';
    name = 'pawn';

    constructor(currentPosition: string) {
        console.log(`Pawn was created`);
        this.currentPosition = currentPosition;
    }

    currentPosition: string;

    makeMove(position: ChessPosition) {
        throw new Error('Method not implemented.');
    }
}
