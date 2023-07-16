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

function printPreOrder(node) {
  if (node.left) {
    printPreOrder(node.left);
  }
  if (node.right) {
    printPreOrder(node.right);
  }
  console.log(node);
}

printPreOrder(input);
