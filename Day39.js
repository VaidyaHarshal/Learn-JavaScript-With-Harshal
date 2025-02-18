//  Everything in JavaScript is either a...
// A: primitive or object
// B: function or object
// C: trick question! only objects
// D: number or object

// Answer: A
// JavaScript only has primitive types and objects.

// Primitive types are boolean, null, undefined, bigint, number, string, and symbol.

// What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that 'foo'.toUpperCase() evaluates to 'FOO' and does not result in a TypeError. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. String, and then immediately discard the wrapper after the expression evaluates. All primitives except for null and undefined exhibit this behavior.
