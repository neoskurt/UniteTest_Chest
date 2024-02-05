function isValidPawnMove(board, color, initialPosition, finalPosition) {
  const direction = color === 'white' ? -1 : 1; // Inverser la direction

  console.log('Direction :', direction);
console.log('finalPosition.row:', finalPosition.row);
console.log('initialPosition.row:', initialPosition.row);
console.log('finalPosition.col:', finalPosition.col);
console.log('initialPosition.col:', initialPosition.col);

// Déplacement de 1 case vers l'avant
if (
  finalPosition.col === initialPosition.col &&
  finalPosition.row === initialPosition.row + direction
) {
    return true;
}

// Déplacement de 2 cases vers l'avant
if (
  finalPosition.col === initialPosition.col &&
  finalPosition.row === initialPosition.row + (direction*2)
) {
    return true;
}
  return false;
}


module.exports = {
  isValidPawnMove,
};
