const nonEmptyUniversalValueTree = {
  value: 0,
  left: {
    value: 1,
    left: null,
    right: null,
  },
  right: {
    value: 0,
    left: {
      value: 1,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 1,
        left: null,
        right: null,
      },
    },
    right: {
      value: 0,
      left: null,
      right: null,
    },
  },
};

module.exports = {
  nonEmptyUniversalValueTree,
};
