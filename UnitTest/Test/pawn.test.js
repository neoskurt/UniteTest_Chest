const { createEmptyChessBoard, movePiece } = require('../chess');
const { isValidPawnMove } = require('../Pieces/pawn');

test('Déplacement valide d\'un pion vers 1 case en haut', () => {
    const board = createEmptyChessBoard();
    const pawn = { type: 'pawn', color: 'white' };
    const initialPosition = { row: 6, col: 0 };
    const validFinalPosition = { row: 5, col: 0 }; 
    board[initialPosition.row][initialPosition.col] = pawn;
    movePiece(board, initialPosition, validFinalPosition);
    const validPawnMove = isValidPawnMove(board, pawn.color, initialPosition, validFinalPosition);
    expect(validPawnMove).toBe(true);
});

test('Déplacement valide d\'un pion vers 2 case en haut', () => {
    const board = createEmptyChessBoard();
    const pawn = { type: 'pawn', color: 'white' };
    const initialPosition = { row: 6, col: 0 };
    const validFinalPosition = { row: 4, col: 0 }; 
    board[initialPosition.row][initialPosition.col] = pawn;
    movePiece(board, initialPosition, validFinalPosition);
    const validPawnMove = isValidPawnMove(board, pawn.color, initialPosition, validFinalPosition);
    expect(validPawnMove).toBe(true);
});

