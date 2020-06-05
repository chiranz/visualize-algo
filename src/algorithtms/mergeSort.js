const mergeSort = array => {
  // Base case when array consists one element
  if (array.length === 1) return array;
  // Finding out the mid point
  const middle = Math.floor(array.length / 2);
  // Dividing the array
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  let sortedArray = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    sortedArray.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    sortedArray.push(right[rightIndex]);
    rightIndex++;
  }
  return sortedArray;
};

function getMergeSortAnimation(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxillaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxillaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxillaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxillaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxillaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxillaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxillaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    // Values we are compairing we push them once to change their color
    animations.push([i, j]);
    // Values that we are compairing we push them a
    // second time to bring their color to normal
    animations.push([i, j]);
    if (auxillaryArray[i] <= auxillaryArray[j]) {
      // we overwrite the value of k in original
      // array with the value at inddex i in auxillary array
      animations.push([k, auxillaryArray[i]]);
      mainArray[k++] = auxillaryArray[i++];
    } else {
      animations.push([k, auxillaryArray[j]]);
      mainArray[k++] = auxillaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // Values comparing and changing its color
    animations.push([i, i]);
    // values changing color for second time
    animations.push([i, i]);
    // overwrite the value at index k in the original array
    // with the value of i in the auxillary array
    animations.push([k, auxillaryArray[i]]);
    mainArray[k++] = auxillaryArray[i++];
  }
  while (j <= endIdx) {
    // Values comparing and changing its color
    animations.push([j, j]);
    // values changing color for second time
    animations.push([j, j]);
    // overwrite the value at index k in the original array
    // with the value of j in the auxillary array
    animations.push([k, auxillaryArray[j]]);
    mainArray[k++] = auxillaryArray[j++];
  }
}

module.exports = { mergeSort, getMergeSortAnimation };
