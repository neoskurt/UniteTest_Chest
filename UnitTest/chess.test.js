// chess.test.js
const { createEmptyChessBoard, movePiece } = require('./chess');
const { isValidPawnMove } = require('./pawn');
const { isValidRookMove } = require('./rook');
const { isValidKingMove } = require('./king');
const { isValidQueenMove } = require('./queen');

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
    expect(validPawnMove).toBe(true);
});

test('Déplacement valide d\'une tour en ligne', () => {
    const board = createEmptyChessBoard();
    const rook = { type: 'rook', color: 'white' };

    const initialPosition = { row: 7, col: 0 }; 
    const validLineFinalPosition = { row: 4, col: 0 }; // Simuler un déplacement en ligne vers le bas

    board[initialPosition.row][initialPosition.col] = rook;

    movePiece(board, initialPosition, validLineFinalPosition);

    const validLineMove = isValidRookMove(board, initialPosition, validLineFinalPosition);
    expect(validLineMove).toBe(true);
});

test('Déplacement valide d\'une tour en colonne', () => {
    const board = createEmptyChessBoard();
    const rook = { type: 'rook', color: 'white' };

    const initialPosition = { row: 7, col: 0 }; 
    const validColumnFinalPosition = { row: 7, col: 4 }; 

    board[initialPosition.row][initialPosition.col] = rook;

    movePiece(board, initialPosition, validColumnFinalPosition);

    const validColumnMove = isValidRookMove(board, initialPosition, validColumnFinalPosition);
    expect(validColumnMove).toBe(true);
});

// chess.test.js
test('Déplacement valide d\'un roi', () => {
    const board = createEmptyChessBoard();
    const king = { type: 'king', color: 'white' };

    const initialPosition = { row: 7, col: 4 }; 
    const validKingFinalPosition = { row: 7, col: 3 }; // Simuler un déplacement en diagonale vers le haut à gauche

    board[initialPosition.row][initialPosition.col] = king;

    movePiece(board, initialPosition, validKingFinalPosition);

    const validKingMove = isValidKingMove(board, initialPosition, validKingFinalPosition);
    expect(validKingMove).toBe(true);
});

test('Déplacement valide d\'une reine', () => {
  const board = createEmptyChessBoard();
  const queen = { type: 'queen', color: 'white' };

  const initialPosition = { row: 7, col: 3 }; 
  const validQueenFinalPosition = { row: 5, col: 3 }; // Simuler un déplacement en ligne vers le haut

  board[initialPosition.row][initialPosition.col] = queen;

  movePiece(board, initialPosition, validQueenFinalPosition);

  const validQueenMove = isValidQueenMove(board, initialPosition, validQueenFinalPosition);
  expect(validQueenMove).toBe(true);
});
