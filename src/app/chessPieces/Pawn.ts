class Pawn implements ChessPiece {
    image = '../../../../assets/img/pawn-white.png';

    constructor(currentPosition: ChessPosition) {
        console.log(`Pawn was created`);
        this.currentPosition = currentPosition;
    }

    currentPosition: ChessPosition;

    makeMove(position: ChessPosition) {
        throw new Error('Method not implemented.');
    }
}
