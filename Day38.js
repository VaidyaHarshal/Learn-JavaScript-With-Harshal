// 38. What's the output?

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

// A: 1 undefined 2
// B: undefined undefined undefined
// C: 1 1 2
// D: 1 undefined undefined

// Answer: A
// The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.

// Later, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.

// Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.
