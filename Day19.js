// 19. What's the output?

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

// A: "number"
// B: "array"
// C: "object"
// D: "NaN"

// Answer: C
// The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"
