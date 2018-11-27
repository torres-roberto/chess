interface ChessPiece {
    image: string;
    currentPosition: ChessPosition;
    makeMove(position: ChessPosition);
}
