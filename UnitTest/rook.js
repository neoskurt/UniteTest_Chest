// rook.js

// 
function isValidRookMove(board, initialPosition, finalPosition) {
  // Vérifie si la case initiale est vide
  if (
    finalPosition.row < 0 || finalPosition.row >= 8 ||
    finalPosition.col < 0 || finalPosition.col >= 8
  ) {
    return false;
  }
  if (
    finalPosition.row === initialPosition.row ||
    finalPosition.col === initialPosition.col
  ) {
    return true;
  }
  return false;
}

module.exports = {
  isValidRookMove,
};
