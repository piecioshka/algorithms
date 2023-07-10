const { time } = require('./utils/time');
const { sortedNumbers } = require('./data/sorted-numbers');

// not exist any assumptions
const input = sortedNumbers;

// task:
// get index of x

// solution
function linearSearch(input, target) {
  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    console.log('linearSearch', { i, item, target });
    if (item === target) {
      return i;
    }
  }
  return -1;
}

// playground
const x = 777;
const index = time(() => linearSearch(input, x));
console.log('result', { x, index });
