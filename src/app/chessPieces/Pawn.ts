class Pawn implements ChessPiece {
    constructor(currentPosition: ChessPosition) {
        this.currentPosition = currentPosition;        
    }

    currentPosition: ChessPosition;    
    
    makeMove(position: ChessPosition) {
        throw new Error("Method not implemented.");
    }
}