function isValidKnightMove(initialPosition, finalPosition) {
    console.log( finalPosition.row , initialPosition.row)

    const rowDiff = Math.abs(finalPosition.row - initialPosition.row);
    const colDiff = Math.abs(finalPosition.col - initialPosition.col);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
  }
  
  module.exports = {
    isValidKnightMove,
  };
  