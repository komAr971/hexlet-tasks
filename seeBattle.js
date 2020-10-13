const calcShipsCount = (battleField) => {
  let shipsCount = 0;
  const fieldSize = battleField.length;
  for (let row = 0; row < fieldSize; row += 1) {
    for (let col = 0; col < fieldSize; col += 1) {
      if (battleField[row][col] && !battleField[row][col - 1]) {
        if (!battleField[row - 1] || !battleField[row - 1][col]) {
          shipsCount += 1;
        }
      }
    }
  }
  return shipsCount;
};

const isValidField = (battleField) => {
  for (let col = 0; col < battleField.length; col += 1) {
    for (let row = 1; row < battleField.length; row += 1) {
      if (battleField[row][col]) {
        if (battleField[row - 1][col - 1] || battleField[row - 1][col + 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

export { calcShipsCount, isValidField };
