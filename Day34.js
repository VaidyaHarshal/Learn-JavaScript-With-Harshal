// 34. What's the output?

function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());

// A: "object"
// B: "number"
// C: "function"
// D: "undefined"

// Answer: B
// The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number".

// FYI: typeof can return the following list of values: undefined, boolean, number, bigint, string, symbol, function and object. Note that typeof null returns "object".
