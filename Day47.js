// 47. What's the output?

const person = {
  name: "Harshal",
  age: 21,
};

for (const item in person) {
  console.log(item);
}

// A: { name: "Lydia" }, { age: 21 }
// B: "name", "age"
// C: "Lydia", 21
// D: ["name", "Lydia"], ["age", 21]

// Answer: B
// With a for-in loop, we can iterate through object keys, in this case name and age. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of item equal to the current key it’s iterating over. First, item is equal to name, and gets logged. Then, item is equal to age, which gets logged.
