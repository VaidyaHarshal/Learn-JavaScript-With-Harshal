// 12. What's the output?

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

// A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
// B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
// C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
// D: Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError

// Answer: A
// For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!

// We said that this.firstName equals "Sarah" and this.lastName equals "Smith".
// What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith',
// sarah itself is left undefined, since we don't return a value from the Person function.
