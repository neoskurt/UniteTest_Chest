function isValidQueenMove(board, initialPosition, finalPosition) {
    if (
        finalPosition.row < 0 || finalPosition.row >= 8 ||
        finalPosition.col < 0 || finalPosition.col >= 8
    ) {
        return false;
    }
    // Vérifie si le déplacement est en diagonale, en ligne ou en colonne
    if (
        finalPosition.row === initialPosition.row ||
        finalPosition.col === initialPosition.col ||
        Math.abs(finalPosition.row - initialPosition.row) === Math.abs(finalPosition.col - initialPosition.col)
    ) {
        return true;
    }
    return false;
}

module.exports = {
  isValidQueenMove,
};
