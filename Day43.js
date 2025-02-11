// 43. What does this return?

[..."Harshal"];

// A: ["L", "y", "d", "i", "a"]
// B: ["Lydia"]
// C: [[], "Lydia"]
// D: [["L", "y", "d", "i", "a"]]

// Answer: A
// A string is an iterable. The spread operator maps every character of an iterable to one element.
