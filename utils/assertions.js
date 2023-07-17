function assertDefined(condition, errMessage = 'Assertion Failed', okMessage) {
  if (!condition) {
    console.error(errMessage);
  } else if (okMessage) {
    console.log(okMessage);
  }
}

module.exports = {
  assertDefined,
};
