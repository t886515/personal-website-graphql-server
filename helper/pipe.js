const dialogueTitle = '[Pipe Error]';

module.exports = (...func) => {
  for (let arg of func) {
    if (typeof arg !== 'function') {
      // throw new Error(`[Pipe Error] ${arg} is not a function.`);
      console.error(`${dialogueTitle} ${arg} is not a function.`);
      process.exit(1);
    }
  }
  return () =>
    (async function(func) {
      return await func.reduce((acc, x) => {
        return x(acc);
      }, null);
    })(func);
  /*
  this works for normal function piping but not working for async -
  reason is, when you pass down an array of functions and start the first
  loop, it then creates a promise result (the acc becomes a promise, even
  if it was "resolved"), and when passing down promise as an input to next
  function, it would break the function pipe.
  */
  // return  (result = null) =>
  //     func.reduce(async (acc, x) => {
  //     let wait = await x(acc);
  //     return wait;
  //   }, result);

  /*
  data isn't really required unless it's passed down from the very beginning
  e.g.: module.exports = (data, ...fun) => { ... }
  */

  // const asyncPipe = async (func, data) => {
  //   /*version 1 with for loop*/
  //   let passDownValue = data || null;
  //   for (let one of func) {
  //     passDownValue = await one(passDownValue);
  //   }
  //   return passDownValue;
  //
  //   /*version 2 with reduce*/
  //   // return await func.reduce((acc, x) => {
  //   //   return x(acc);
  //   // }, data);
  // };
  // return () => asyncPipe(func, data);
};
