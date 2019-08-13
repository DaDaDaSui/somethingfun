// Function.prototype.mycall = function (context) {
//   // console.log(typeof this);
//   if (typeof this !== 'function') {
//     throw new TypeError('not funciton')
//   }
//   context = context || window;
//   console.log(context.fn);
//   context.fn = this;
//   console.log(context.fn);
//   console.log(...arguments);
//   let arg = [...arguments].slice(1)
//   console.log(arg);
//   let result = context.fn(...arg)
//   delete context.fn
//   console.log(result);
//   return result
// }
// Function.prototype.mycall({fn: 123})

