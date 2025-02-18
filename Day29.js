// 29. What's the output?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// A: 123
// B: 456
// C: undefined
// D: ReferenceError

// Answer: B
// Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.

// However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.

// Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.
