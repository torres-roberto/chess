interface Move {
    selectedPosition: Position;
    targetedPosition: Position;
    situation: Situation;    
}

interface Position {
    squareId: string,
    occupyingPiece: ChessPiece
}

interface Situation {
    whosTurn: string;
    layout: ChessPiece[][]
}