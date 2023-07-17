const { assertDefined } = require('../../utils/assertions');

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

const input2 = {
  value: 5,
  left: {
    value: 1,
  },
  right: {
    value: 4,
    left: {
      value: 3,
    },
    right: {
      value: 6,
    },
  },
};

const input3 = {
  value: 2,
  left: {
    value: 2,
  },
  right: {
    value: 2,
  },
};

const input4 = {
  value: 1,
  left: {
    value: 1,
  },
};

const input5 = {
  value: 1,
  right: {
    value: 1,
  },
};

const input6 = {
  value: 5,
  left: {
    value: 4,
  },
  right: {
    value: 6,
    left: {
      value: 3,
    },
    right: {
      value: 7,
    },
  },
};

const input7 = {
  value: 0,
};

const input8 = {
  value: 0,
  left: {
    value: -7,
  },
};

function isValidBST(root) {
  function isValid(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }

    return (
      isValid(node.left, min, node.value - 1) &&
      isValid(node.right, node.value + 1, max)
    );
  }

  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

assertDefined(isValidBST(input), 'error = input');
assertDefined(!isValidBST(input2), 'error = input2');
assertDefined(!isValidBST(input3), 'error = input3');
assertDefined(!isValidBST(input4), 'error = input4');
assertDefined(!isValidBST(input5), 'error = input5');
assertDefined(!isValidBST(input6), 'error = input6');
assertDefined(isValidBST(input7), 'error = input7');
assertDefined(isValidBST(input8), 'error = input8');
