const { time } = require('./utils/time');
const { sortedNumbers } = require('./data/sorted-numbers');

// assumptions:
// - sorted list in non-decreasing
const input = sortedNumbers;

// task:
// get index of x

// solution
function binarySearch(
  input,
  target,
  startIndex = 0,
  endIndex = input.length - 1,
) {
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const pointer = input[middleIndex];
  console.log('binarySearch', { pointer, target });

  if (pointer === target) {
    return middleIndex;
  }

  if (pointer < target) {
    // right
    return binarySearch(input, target, middleIndex + 1, endIndex);
  } else if (pointer > target) {
    // left
    return binarySearch(input, target, startIndex, middleIndex - 1);
  }

  return -1;
}

// playground
const x = 777;
const index = time(() => binarySearch(input, x));
console.log('result', { x, index });
