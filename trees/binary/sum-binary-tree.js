const { binaryTreeNumbers } = require('../../data/binary-tree-numbers');

function sumBinaryTree(node) {
  if (!node) {
    return 0;
  }

  return node.value + sumBinaryTree(node.left) + sumBinaryTree(node.right);
}

const result = sumBinaryTree(binaryTreeNumbers);
console.log({ result });
