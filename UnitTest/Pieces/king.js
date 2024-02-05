function isValidKingMove(board, initialPosition, finalPosition) {
  // Vérifie si le déplacement est d'une case à gauche, à droite, en haut, en bas ou en diagonale
  if (
    finalPosition.row < 0 || finalPosition.row >= 8 ||
    finalPosition.col < 0 || finalPosition.col >= 8
  ) {
    return false;
  }
  if (
    Math.abs(finalPosition.row - initialPosition.row) <= 1 &&
    Math.abs(finalPosition.col - initialPosition.col) <= 1
  ) {
    return true;
  }
  return false;
}

module.exports = {
  isValidKingMove,
};
