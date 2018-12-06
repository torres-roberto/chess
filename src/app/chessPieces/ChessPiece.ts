interface ChessPiece {
    image: string;
    currentPosition: string;
    canMove(): boolean;
    makeMove(position: ChessPosition);
    name: string;
}
