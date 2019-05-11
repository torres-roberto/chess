export class Referee {
    static alreadySelectedPiece = false;
    static pieces = {};

    static CanSelectPiece (): boolean {
        return !this.alreadySelectedPiece;
    }

    static SelectPiece(chessPiece: ChessPiece): void {
        if (this.alreadySelectedPiece) {
            this.alreadySelectedPiece = false;
            return;
        }
        this.alreadySelectedPiece = true;
    }

    isMyTurn(): boolean {
        return true;
    }

    canSelect(id: string): boolean {
        return true;
    }
}
