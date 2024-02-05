// chess.js

// Fonction pour créer un plateau d'échecs vide
function createEmptyChessBoard() {
  const board = new Array(8).fill(null).map(() => new Array(8).fill(null));
  return board;
}
// Fonction pour vérifier la validité d'un mouvement de pièce

// Fonction pour déplacer une pièce sur le plateau
function movePiece(board, initialPosition, finalPosition) {
  const pieceToMove = board[initialPosition.row][initialPosition.col];

  if (pieceToMove === null) {
    console.error('Erreur : La case initiale est vide.');
    return;
  }

  board[finalPosition.row][finalPosition.col] = pieceToMove;
  board[initialPosition.row][initialPosition.col] = null;
}

module.exports = {
  createEmptyChessBoard,
  movePiece,
};
