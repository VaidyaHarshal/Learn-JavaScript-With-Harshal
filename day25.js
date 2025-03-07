// 25. What's the output?

const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }
// C: { a: "three", b: "two" }
// D: SyntaxError

// Answer: C
// If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.
