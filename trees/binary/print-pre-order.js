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
  if (!node) {
    return;
  }
  console.log(node);
  printPreOrder(node.left);
  printPreOrder(node.right);
}

printPreOrder(input);
