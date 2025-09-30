/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {

  let target = arr.length - k;
  let dupLength;

  function partition(arr, left, right) {
    dupLength = 0;
    let pivot = arr[right];
    let pointer = left;

    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
        pointer++;
      }
    }

    for (let i = pointer; i < right; i++) {
      if (arr[i] === pivot) {
        [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
        pointer++;
        dupLength++;
      }
    }

    [arr[pointer], arr[right]] = [arr[right], arr[pointer]];

    return pointer;
  }

  let left = 0, right = arr.length - 1;
  let pivotPos;

  while (true) {
    pivotPos = partition(arr, left, right);

    if (pivotPos - dupLength <= target && target <= pivotPos) break;
    else if (target < pivotPos) right = pivotPos - 1;
    else left = pivotPos + 1;
  }

  return arr[pivotPos];
};