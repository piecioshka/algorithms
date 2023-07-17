const { linkedListWithCycle } = require('../data/linked-list-with-cycle');

function hasCycle(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head.next();

  while (slow !== null && fast != null && fast.next() != null) {
    if (slow == fast) {
      return true;
    }

    slow = slow.next();
    fast = fast.next().next();
  }

  return false;
}

const result = hasCycle(linkedListWithCycle);
console.log({ result });
