
function isValidBishopMove(initialPosition, finalPosition) {
    const rowDiff = Math.abs(finalPosition.row - initialPosition.row);
    const colDiff = Math.abs(finalPosition.col - initialPosition.col);
  
    // Un fou se déplace en diagonale (même nombre de cases dans chaque direction).
    return rowDiff === colDiff;
  }
  
  module.exports = {
    isValidBishopMove,
  };
  