module.exports = (...func) => {
  for (let arg of func) {
    if (typeof arg !== func) {
      return `Error: ${arg} is not a function.`;
    }
  }

  return (result = null) =>
    func.reduceRight(async (acc, x) => {
      return await x(acc);
    }, result);
};
