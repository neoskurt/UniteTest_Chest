const { isValidKnightMove } = require('./knight');

test('Déplacement valide d\'un cavalier', () => {

    const initialPosition = { row: 4, col: 4 }; 
    const validFinalPosition1 = { row: 2, col: 5}; 
    const validFinalPosition2 = { row: 6, col: 3 };
  
    const invalidFinalPosition1 = { row: 5, col: 3 }; 
    const invalidFinalPosition2 = { row: 4, col: 2 }; 
  
    expect(isValidKnightMove(initialPosition, validFinalPosition1)).toBe(true);
    expect(isValidKnightMove(initialPosition, validFinalPosition2)).toBe(true);
  
    expect(isValidKnightMove(initialPosition, invalidFinalPosition1)).toBe(false);
    expect(isValidKnightMove(initialPosition, invalidFinalPosition2)).toBe(false);
  });