const hour = 16
let greet;
if (hour < 18) {
    greet = "good day";
} else {
    greet = "good evening";
}

console.log(greet)
console.log(hour)

let voteage = 8
let countery = "India"
if (countery == 'India'){
    if(voteage >= 18){
        console.log('you are now eligible to vote in india')
    }
}


// Task 1
let int = 0
if (int < 0){
    console.log('Negative')
}
if(int > 0){
    console.log('Positive')
}
if(int == 0){
    console.log('its zero')
}

console.log("-------------------------------------------------------------------")
// Task 2
let num = 18
if (num%2 == 0){
    console.log('its a even number')
}else{
    console.log('its odd')
}

console.log("-------------------------------------------------------------------")
// Task 3
let age  = 17
if (age<18){
    console.log("you are not eligble")
}
else{
    console.log("you are eligible")
}

console.log("-------------------------------------------------------------------")
// Task 4
let num1 = 12
let num2 = 45
if (num1 > num2){
    console.log(num1,'is greater')
}else{
    console.log(num2,'is greater')
}

console.log("-------------------------------------------------------------------")
// Task 5
let num11 = 12
let num22 = 45
let num33 = 452
if (num11 > num22 && num11 > num33){
    console.log(num11,"is largest")
}
else if (num22 > num11 && num22 > num33){
    console.log(num22,"is largest")
}
else{
    console.log(num33,"is largest")
}

console.log("-------------------------------------------------------------------")
// Task 6
// year = 2024
// if (year % 4 == 0 && year % 400 == 0){
//     console.log(year + ' is a leap year')
// }else{
//     console.log(year + ' its not a leap year')
// }
let year = 2024
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log(year + " is a leap year")
}else{
    console.log(year + " is not a leap year")
}

console.log("-------------------------------------------------------------------")
// Task 7
let marks = 33
if (marks < 40){
    console.log('you are FAILD')
}else{
    console.log('you are PASSED')
}

console.log("-------------------------------------------------------------------")
// Task 8
let grade = 49
if (grade >= 90){
    console.log('Grade A')
}else if(grade>= 70){
    console.log('Grade B')
}else if(grade >= 50 ){
    console.log('Grade C')
}else{
    console.log("Fail")
}

console.log("-------------------------------------------------------------------")
// Task 9
let chcek = 5
if (chcek % 5 == 0 && chcek % 11 == 0){
    console.log(chcek+' the number is divisible by both')
}else{
    console.log('its not divisible')
}

console.log("-------------------------------------------------------------------")
// Task 10
// let n = a
// if (typeof n == "string"){
//     console.log('its a string')
// }else if(typeof n != 'string'){
//     console.log('its a integer')
// }
// else{
//     console.log('special charcter')
// }
let n = 'a'

if(n >= 'a' && n <= 'z' || n >= 'A' && n <= 'Z'){
    console.log("Alphabet")
}
else if(n >= '0' && n <= '9'){
    console.log("Digit")
}
else{
    console.log("Special Character")
}

console.log('---------------------------------------------------------------------------')



// What is Ternary Operator?
// Ternary operator is a one-line shortcut for if...else.
let agee = 20
console.log(agee >= 18 ? "Eligible" : "Not eligible")

console.log('---------------------------------------------------------------------------')

// So ternary is basically:
// condition ? true_value : false_value

// Task 1
let a = 13
let b = a%2==0 ? "Even": "Odd"
console.log(b)

console.log('---------------------------------------------------------------------------')
// Task 2
let aa = 3
let bb = aa<0 ? "Negtive" : "Positive"
console.log(bb)