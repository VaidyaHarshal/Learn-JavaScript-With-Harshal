// 23. What's the output?

var num = 8;
var num = 10;

console.log(num);

// A: 8
// B: 10
// C: SyntaxError
// D: ReferenceError

// Answer: B
// With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

// You cannot do this with let or const since they're block-scoped and therefore can't be redeclared.
