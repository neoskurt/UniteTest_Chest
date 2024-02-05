const { createEmptyChessBoard, movePiece } = require('../chess');
const { isValidQueenMove } = require('../Pieces/queen');

test('Déplacement valide d\'une reine', () => {
    const board = createEmptyChessBoard();
    const queen = { type: 'queen', color: 'white' };

    const initialPosition = { row: 7, col: 3 }; 
    const validQueenFinalPosition = { row: 5, col: 3 }; 
    board[initialPosition.row][initialPosition.col] = queen;
    movePiece(board, initialPosition, validQueenFinalPosition);
    const validQueenMove = isValidQueenMove(board, initialPosition, validQueenFinalPosition);
    expect(validQueenMove).toBe(true);
});
