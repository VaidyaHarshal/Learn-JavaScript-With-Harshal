// 21. What's the value of sum?

const sum = eval("10*10+5");

// A: 105
// B: "105"
// C: TypeError
// D: "10*10+5"

// Answer: A
// eval evaluates code that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.
