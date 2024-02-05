// chess.test.js
const { createEmptyChessBoard, movePiece } = require('./chess');
const { isValidPawnMove } = require('./pawn');
<<<<<<< HEAD
const { isValidKnightMove } = require('./knight');



=======

>>>>>>> 6e6a8eb7919ef79e5f795bef478d4121196da01b
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
<<<<<<< HEAD


test('Déplacement valide d\'un cavalier', () => {

  const initialPosition = { row: 3, col: 3 }; 
  const validFinalPosition1 = { row: 4, col: 2 }; 
  const validFinalPosition2 = { row: 2, col: 4 };

  const invalidFinalPosition1 = { row: 2, col: 2 }; 
  const invalidFinalPosition2 = { row: 4, col: 4 }; 

  expect(isValidKnightMove(initialPosition, validFinalPosition1)).toBe(true);
  expect(isValidKnightMove(initialPosition, validFinalPosition2)).toBe(true);

  expect(isValidKnightMove(initialPosition, invalidFinalPosition1)).toBe(false);
  expect(isValidKnightMove(initialPosition, invalidFinalPosition2)).toBe(false);
});

=======
>>>>>>> 6e6a8eb7919ef79e5f795bef478d4121196da01b
