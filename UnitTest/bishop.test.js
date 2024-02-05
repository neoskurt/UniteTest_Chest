const { isValidBishopMove } = require('./bishop');

test('Déplacement valide d\'un fou', () => {
  
    const initialPosition = { row: 3, col: 3 }; 
    const validFinalPosition1 = { row: 6, col: 6 };
    const validFinalPosition2 = { row: 1, col: 1 }; 
  
    const invalidFinalPosition1 = { row: 4, col: 5 }; 
    const invalidFinalPosition2 = { row: 5, col: 3 }; 
  
    expect(isValidBishopMove(initialPosition, validFinalPosition1)).toBe(true);
    expect(isValidBishopMove(initialPosition, validFinalPosition2)).toBe(true);
  
    expect(isValidBishopMove(initialPosition, invalidFinalPosition1)).toBe(false);
    expect(isValidBishopMove(initialPosition, invalidFinalPosition2)).toBe(false);
  });