const { linkedListWithCycle } = require('../data/linked-list-with-cycle');

function hasCycle(head) {
  if (!head) {
    return false;
  }

  const normal = head.next();
  const speed = head.next().next();

  if (normal.value === speed.value) {
    return true;
  }

  return hasCycle(normal);
}

const result = hasCycle(linkedListWithCycle);
console.log({ result });
