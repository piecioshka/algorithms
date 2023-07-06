// assumptions
// - sorted list in non-decreasing
const input = [0, 0, 2, 3, 5, 6, 7, 8, 10, 12, 55];

// task:
// get boolean if x is inside the list

function binarySearch(input, value) {
  let pointer = Math.ceil(input.length / 2);
  console.log('binarySearch', JSON.stringify(input), value);

  if (input.length === 0) {
    return false;
  }

  if (input.length === 1) {
    return input[0] === value;
  }

  if (input[pointer] === value) {
    return true;
  } else if (input[pointer] > value) {
    return binarySearch(input.slice(0, pointer), value);
  } else {
    return binarySearch(input.slice(pointer, input.length), value);
  }
}

const x = 5;
const index = binarySearch(input, x);
console.log('result', index);
