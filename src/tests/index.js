const testSortingAlgorithm = (array, algorithm) => {
  // Sorted using provided algorithm
  const mySolution = algorithm(array);
  //   Sorted using javascript internal sort method

  const internalSolution = array.slice().sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (mySolution[i] !== internalSolution[i]) {
      // if values are not equal return false
      return false;
    }
  }
  //   as all values are equal return true
  return true;
};

module.exports = {
  testSortingAlgorithm
};
