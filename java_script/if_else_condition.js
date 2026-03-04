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