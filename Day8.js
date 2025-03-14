// 8. What's the output?

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));

// A: orange
// B: purple
// C: green
// D: TypeError

// Answer: D
// The colorChange function is static. Static methods are designed to live
// only on the constructor in which they are created,
// and cannot be passed down to any children or called upon class instances.
// Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.
