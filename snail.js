import _ from 'lodash';

const buildSnailPath = (matrix) => {
  let tmpMatrix = matrix;
  const resultArray = [];
  while (tmpMatrix.length !== 0) {
    for (let i = 0; i < tmpMatrix[0].length; i += 1) {
      resultArray.push(tmpMatrix[0][i]);
    }
    tmpMatrix = _.drop(tmpMatrix);
    tmpMatrix = _.reverse(_.zip(...tmpMatrix));
  }
  return resultArray;
};

export default buildSnailPath;
