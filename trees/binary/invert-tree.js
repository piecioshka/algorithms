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

function invertTree(root) {
  if (!root) {
    return root;
  }

  if (root.left) {
    invertTree(root.left);
  }

  if (root.right) {
    invertTree(root.right);
  }

  const left = root.left;
  const right = root.right;
  root.right = left;
  root.left = right;

  return root;
}

const result = invertTree(input);
console.log(JSON.stringify(result, null, 2));
