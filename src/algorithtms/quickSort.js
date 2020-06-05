function getQuickSortAnimation(array) {
  const animations = [];
  if (array.length < 1) return array;
  const auxillaryArray = array.slice();
  quickSortHelper(array, 0, array.length - 1, auxillaryArray, animations);
}
function quickSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxillaryArray,
  animations
) {
  return;
}
