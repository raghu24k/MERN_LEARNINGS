let x = 5;
let y = 6;
let z = x + y;
console.log(z)

const xx = 5;
const yy = 6;
const zz = x + y;
console.log(zz)

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter, a $ sign or an underscore (_).
// Names are case sensitive (X is different from x).
// Reserved words (JavaScript keywords) cannot be used as names.

let _bb = 55
let $bb = 66
console.log(_bb)
console.log($bb)


// const is used when you know this value never be changed when ones assigned
const v = 7
const vv = 77
console.log(v*vv)


const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");


// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression:

// Example
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"  

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)  


// Example
let x1 = 5;
(x1 == 8); // equals false
(x1 != 8); // equals true