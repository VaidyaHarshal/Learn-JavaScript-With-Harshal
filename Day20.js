// 20. What's the output?

function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();

// A: 21
// B: undefined
// C: ReferenceError
// D: TypeError

// Answer: C
// With "use strict", you can make sure that you don't accidentally declare global variables.
// We never declared the variable age, and since we use "use strict", it will throw a reference error.
// If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.
