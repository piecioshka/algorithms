const input = {
  value: 10,
  left: {
    value: 5,
    left: null,
    right: null,
  },
  right: {
    value: 15,
    left: null,
    right: null,
  },
};

function isSameTree(p, q) {
  if ((p && !q) || (!p && q)) {
    return false;
  }

  if (!p && !q) {
    return true;
  }

  if (p.val !== q.val) {
    return false;
  }

  const left = isSameTree(p.left, q.left);

  if (!left) {
    return false;
  }

  const right = isSameTree(p.right, q.right);

  if (!right) {
    return false;
  }

  return true;
}

const result = isSameTree(input, input);
console.log({ result });
