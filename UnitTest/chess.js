function createEmptyChessBoard() {
  const board = new Array(8).fill(null).map(() => new Array(8).fill(null));
  return board;
}
// Fonction pour déplacer une pièce sur le plateau
function movePiece(board, initialPosition, finalPosition) {
  const pieceToMove = board[initialPosition.row][initialPosition.col];
  board[finalPosition.row][finalPosition.col] = pieceToMove;
  board[initialPosition.row][initialPosition.col] = null;
}


function isValidMove(board, initialPosition, finalPosition) {
  const piece = board[initialPosition.row][initialPosition.col];

  // Vérifie si la case de destination est à l'intérieur du plateau
  if (
    finalPosition.row < 0 || finalPosition.row >= 8 ||
    finalPosition.col < 0 || finalPosition.col >= 8
  ) {
    return false;
  }

  // Vérifie si la case de destination est occupée par une pièce de la même couleur
  const destinationPiece = board[finalPosition.row][finalPosition.col];
  if (destinationPiece !== null && destinationPiece.color === piece.color) {
    return false;
  }

  // Règles de déplacement spécifiques pour les pions
  if (piece.type === 'pawn') {
    const direction = piece.color === 'white' ? 1 : -1;
    // Déplacement de 1 case vers l'avant
    if (
      finalPosition.col === initialPosition.col &&
      finalPosition.row === initialPosition.row + direction &&
      destinationPiece === null
    ) {
      return true;
    }

    // Déplacement de 2 cases vers l'avant depuis la position initiale
    if (
      initialPosition.row === (piece.color === 'white' ? 1 : 6) &&
      finalPosition.col === initialPosition.col &&
      finalPosition.row === initialPosition.row + 2 * direction &&
      destinationPiece === null &&
      board[initialPosition.row + direction][initialPosition.col] === null
    ) {
      return true;
    }

    // Capture en diagonale
    if (
      Math.abs(finalPosition.col - initialPosition.col) === 1 &&
      finalPosition.row === initialPosition.row + direction &&
      destinationPiece !== null
    ) {
      return true;
    }
  }

  // Ajoutez d'autres règles de déplacement pour d'autres types de pièces ici si nécessaire

  // Aucune des conditions n'a été satisfaite, le mouvement n'est pas valide
  return false;
}
// Exportez les fonctions pour les rendre accessibles à d'autres fichiers
module.exports = {
  createEmptyChessBoard,
  isValidMove,
    movePiece,
};