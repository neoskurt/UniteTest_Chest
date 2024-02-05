const { createEmptyChessBoard } = require('./chess');

test('Création d\'un plateau d\'échecs vide', () => {
  const board = createEmptyChessBoard();
  expect(board).toHaveLength(8); // Vérifie la taille du plateau
  expect(board[0]).toHaveLength(8); // Vérifie la taille de la première rangée
  expect(board[0][0]).toBeNull(); // Vérifie que la première case est vide
});
const { movePiece } = require('./chess');

test('Déplacement d\'une pièce sur le plateau', () => {
  const board = createEmptyChessBoard();
  const initialPosition = { row: 0, col: 0 };
  const finalPosition = { row: 2, col: 2 };
  const pieceToMove = board[initialPosition.row][initialPosition.col];
  
  movePiece(board, initialPosition, finalPosition);
  
  expect(board[initialPosition.row][initialPosition.col]).toBeNull(); // Vérifie que la case initiale est vide
  expect(board[finalPosition.row][finalPosition.col]).toBe(pieceToMove); // Vérifie que la pièce est déplacée à la nouvelle position
});
const { isValidMove } = require('./chess');

test('Validation d\'un mouvement de pièce', () => {
  const board = createEmptyChessBoard();
  const initialPosition = { row: 0, col: 0 };
  const finalPosition = { row: 2, col: 2 };

  // Assumez qu'une pièce peut se déplacer en diagonale
  const isValid = isValidMove(board, initialPosition, finalPosition);
  
  expect(isValid).toBe(true);
});