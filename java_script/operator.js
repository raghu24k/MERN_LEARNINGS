let a = 5
let b = (44)/100*5
console.log(b)

let a1 = 'raghu'
let a2 = 'kumar'
console.log(a1 + " " + a2)

a1 += ' singh'
console.log(a1)


// Adding Strings and Numbers
// Adding two numbers, will return the sum as a number like 5 + 5 = 10.
// Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".

// Example
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;


let x1 = 10;
x1 += 5;
console.log(x,y,z,x1)



let x2 = 5;
let result = x2 > 8;
console.log(result)

let x3 = 7
// let z1 = x3**3

let z2 = Math.pow(x3,2) // this is also used for exponentional  "matho.pow(x,value(2))"
console.log(z2)





// The &&= Operator
// The Logical AND assignment operator is used between two values.
// If the first value is true, the second value is assigned.
// Logical AND Assignment Examples
let x4 = true;
let y3 = x4 &&= 10;
console.log(y3)


// The ||= Operator
// The Logical OR assignment operator is used between two values.
// If the first value is false, the second value is assigned.
// Logical OR Assignment Examples
let x5 = false;
let y5= x ||= 10;
console.log(y5)


// The ??= Operator
// The Nullish coalescing assignment operator is used between two values.
// If the first value is undefined or null, the second value is assigned.
// Nullish Coalescing Assignment Examples
let x6;
x6 ??= 10;
console.log(x6)


// The Spread (...) Operator
// The ... operator splits iterables into individual elements.
let text = "12345";
let min = Math.min(...text);
let max = Math.max(...text);
console.log(min,max)