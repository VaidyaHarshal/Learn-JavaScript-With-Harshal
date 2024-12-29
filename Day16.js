// 16. What's the output?

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// Answer: C
// The postfix unary operator ++:

// Returns the value (this returns 0)
// Increments the value (number is now 1)
// The prefix unary operator ++:

// Increments the value (number is now 2)
// Returns the value (this returns 2)
// This returns 0 2 2.
