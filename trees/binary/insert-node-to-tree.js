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

function insert(node, value) {
  if (value <= node.value) {
    if (node.left === null) {
      node.left = { value, left: null, right: null };
    } else {
      insert(node.left, value);
    }
  } else {
    if (node.right === null) {
      node.right = { value, left: null, right: null };
    } else {
      insert(node.right, value);
    }
  }
};

insert(input, 8);

console.log(JSON.stringify(input, null, 2));
