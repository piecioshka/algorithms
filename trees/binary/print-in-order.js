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

function printInOrder(node) {
  if (node.left) {
    printInOrder(node.left);
  }
  console.log(node);
  if (node.right) {
    printInOrder(node.right);
  }
}

printInOrder(input);
