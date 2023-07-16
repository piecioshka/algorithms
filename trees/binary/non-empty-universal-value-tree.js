const {
  nonEmptyUniversalValueTree: tree,
} = require('../../data/non-empty-universal-value-tree');

// time complexity = O(n * n)

function isUnival(node) {
  if (!node) {
    return true;
  }
  if (node.left !== null && node.left.value !== node.value) {
    return false;
  }
  if (node.right !== null && node.right.value !== node.value) {
    return false;
  }
  if (isUnival(node.left) && isUnival(node.right)) {
    return true;
  }
  return false;
}

function countUnivals(node) {
  if (!node) {
    return 0;
  }

  let count = countUnivals(node.left) + countUnivals(node.right);

  if (isUnival(node)) {
    count++;
  }

  return count;
}

const result = countUnivals(tree);
console.log('countUnivals', { result });

// -----------------------------------------------------------------------------

// time complexity = O(n)

function countUnivals2(root) {
  const { count, isUnival } = helper(root);
  return count;
}

function helper(root) {
  if (root == null) {
    return { count: 0, isUnival: true };
  }

  const { count: leftCount, isUnival: isLeftUnival } = helper(root.left);
  const { count: rightCount, isUnival: isRightUnival } = helper(root.right);

  let isUnival = true;

  if (!isLeftUnival || !isRightUnival) {
    isUnival = false;
  }

  if (root.left !== null && root.left.value !== root.value) {
    isUnival = false;
  }

  if (root.right !== null && root.right.value !== root.value) {
    isUnival = false;
  }

  if (isUnival) {
    return { count: leftCount + rightCount + 1, isUnival };
  } else {
    return { count: leftCount + rightCount, isUnival };
  }
}

const result2 = countUnivals2(tree);
console.log('countUnivals2', { result2 });
