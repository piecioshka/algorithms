const { assertDefined } = require('../utils/assertions');

class Queue {
  head = null; // remove from the head
  tail = null; // add things here

  add(value) {
    const node = { value, next: null };
    if (this.tail != null) {
      this.tail.next = node;
    }
    this.tail = node;
    if (this.head == null) {
      this.head = node;
    }
  }

  remove() {
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head == null) {
      this.tail = null;
    }
    return value;
  }
}

const q = new Queue();
q.add(1);
q.add(2);
const item = q.remove();
assertDefined(item === 1, 'item is not equals 1', 'item is equal 1');
