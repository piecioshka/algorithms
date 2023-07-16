const { assertDefined } = require('../utils/assertions');

class Stack {
  internal = [];

  add(value) {
    this.internal.push(value);
  }

  remove() {
    return this.internal.pop();
  }
}

const s = new Stack();
s.add(1);
s.add(2);
const item = s.remove();
assertDefined(item === 2, 'item is not equals 2', 'item is equal 2');
