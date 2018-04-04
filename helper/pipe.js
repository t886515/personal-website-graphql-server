module.exports = (...func) => {
  for (let arg of func) {
    if (typeof arg !== 'function') {
      return `Error: ${arg} is not a function.`;
    }
  }
  return (result = null) =>
    func.reduce((acc, x) => {
      return async () => {
        return await x(acc);
      };
      // console.log(ready, acc);
    }, result);
};
