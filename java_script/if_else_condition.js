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
// // Task 5
// let num11 = 12
// let num22 = 45
// let num33 = 453
// if (num11 > num22 && num33){
//     console.log(num11,'is greater')
// }
// if(num22 > num11 && num33){
//     console.log(num22,'is greater')
// }else{
//     console.log(num33,'is greater ')
// }

let num11 = 12
let num22 = 45
let num33 = 453

let largest = Math.max(num11, num22, num33)

console.log(largest, "is the largest")