module.exports = function countCats(matrix) {
  const singleArray = matrix.flat();
  let count = 0;
  for (let i = 0; i < singleArray.length; i++) {
    if (singleArray[i] === '^^') {
      count++;
    }
  }
  return count;
};
