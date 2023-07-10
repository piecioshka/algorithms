const time = (fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const diff = end - start;
  console.log({ duration: `${Math.round(diff)}ms` });
  return result;
};

module.exports = {
  time,
};
