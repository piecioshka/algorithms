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

function find(node, value) {
  if (value === node.value) {
    return node;
  } else if (value > node.value) {
    if (node.right) {
      return find(node.right, value);
    } else {
      return null;
    }
  } else {
    if (node.left) {
      return find(node.left, value);
    } else {
      return null;
    }
  }
}

const result = find(input, 13);
console.log(JSON.stringify(result, null, 2));
