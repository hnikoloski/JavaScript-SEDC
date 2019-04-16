let firstValue = document.getElementById(`firstField`);
let secondValue = document.getElementById(`secondField`);
let result = document.getElementById("result");
let sum = document.getElementById("sum");
let difference = document.getElementById("difference");
let multiplication = document.getElementById("multiplication");
let square = document.getElementById("square");

sum.addEventListener("click", function() {
    result.innerText = `${+firstValue.value + +secondValue.value} is the result.`
})
difference.addEventListener("click", function() {
    result.innerText = `${firstValue.value - secondValue.value} is the result.`
})
multiplication.addEventListener("click", function() {
    result.innerText = `${firstValue.value * secondValue.value} is the result.`
})
square.addEventListener("click", function() {
    result.innerText = `${firstValue.value ** secondValue.value} is the result.`
})