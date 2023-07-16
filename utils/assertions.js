function assertDefined(value, errMessage = 'Assertion Failed', okMessage) {
  if (!value) {
    console.error(errMessage);
  } else if (okMessage) {
    console.log(okMessage);
  }
}

module.exports = {
  assertDefined,
};
