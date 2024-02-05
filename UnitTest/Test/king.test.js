
const { createEmptyChessBoard, movePiece } = require('../chess');
const { isValidKingMove } = require('../Pieces/king');

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