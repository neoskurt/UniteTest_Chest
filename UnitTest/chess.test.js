// chess.test.js
const { createEmptyChessBoard, movePiece } = require('./chess');
const { isValidPawnMove } = require('./pawn');

test('Déplacement valide d\'un pion vers 1 case en haut', () => {
    const board = createEmptyChessBoard();
    const pawn = { type: 'pawn', color: 'white' };
    // Position initiale du pion
    const initialPosition = { row: 6, col: 0 }; // Bas du tableau, ligne 2
    const validFinalPosition = { row: 5, col: 0 }; // Simuler un déplacement d'une case vers le haut
    board[initialPosition.row][initialPosition.col] = pawn;
    movePiece(board, initialPosition, validFinalPosition);
  // Tester la validité du mouvement du pion avec la fonction spécifique isValidPawnMove
    const validPawnMove = isValidPawnMove(board, pawn.color, initialPosition, validFinalPosition);
    console.log('isValidPawnMove :', validPawnMove);
    expect(validPawnMove).toBe(true);
});

test('Déplacement valide d\'un pion vers 2 case en haut', () => {
    const board = createEmptyChessBoard();
    const pawn = { type: 'pawn', color: 'white' };
    const initialPosition = { row: 6, col: 0 }; // Bas du tableau, ligne 2
    const validFinalPosition = { row: 4, col: 0 }; // Simuler un déplacement d'une case vers le haut
    board[initialPosition.row][initialPosition.col] = pawn;
    movePiece(board, initialPosition, validFinalPosition);
  // Tester la validité du mouvement du pion avec la fonction spécifique isValidPawnMove
    const validPawnMove = isValidPawnMove(board, pawn.color, initialPosition, validFinalPosition);
    console.log('isValidPawnMove :', validPawnMove);
    expect(validPawnMove).toBe(true);
});
