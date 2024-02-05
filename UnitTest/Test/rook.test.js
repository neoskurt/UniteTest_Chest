
const { createEmptyChessBoard, movePiece } = require('../chess');
const { isValidRookMove } = require('../Pieces/rook');

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
