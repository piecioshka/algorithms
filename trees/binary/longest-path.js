const input = {
  value: 10,
  left: {
    value: 5,
    left: null,
    right: null,
  },
  right: {
    value: 15,
    left: {
      value: 11,
      left: null,
      right: null,
    },
    right: null,
  },
};

function longestPath(root) {
  const result = { depth: 0, items: [] };

  if (root === null) {
    return result;
  }

  const left = longestPath(root.left);
  const right = longestPath(root.right);

  if (left.depth >= right.depth) {
    result.depth = left.depth + 1;
    result.items.push(root, ...left.items);
  } else {
    result.depth = right.depth + 1;
    result.items.push(root, ...right.items);
  }

  return result;
}

const result = longestPath(input);
console.log(
  JSON.stringify(
    {
      result: {
        ...result,
        items: result.items.map((x) => x.value),
      },
    },
    null,
    2,
  ),
);
