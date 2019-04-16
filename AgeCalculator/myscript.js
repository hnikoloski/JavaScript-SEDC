
function calculateAge(birthYear,currentYear){

var birthYear = parseInt(prompt("Enter your birth year: "))
var currentYear  = new Date().getFullYear()
var age  = currentYear - birthYear;
if (birthYear > currentYear) {
    console.log("Enter a valid number")
}
else if (birthYear<0){ 
    console.log("enter a positive number") 
}
else {
     console.log(`I am  ${age}  years old`)  }
}

calculateAge()