// 41. What's the output?

!!null;
!!"";
!!1;

// A: false true false
// B: false false true
// C: false true true
// D: true true false

// Answer: B
// null is falsy. !null returns true. !true returns false.

// "" is falsy. !"" returns true. !true returns false.

// 1 is truthy. !1 returns false. !false returns true.
