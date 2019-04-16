let button = document.getElementById("myButton");
let input1 = document.getElementById("myInput1");
let input2 = document.getElementById("myInput2");
let input3 = document.getElementById("myInput3");
let result = document.getElementById("result");

button.addEventListener("click", function() {

    if (input1.value === "") {
        result.innerText = "Enter some one";
    } else if (input2.value === "") {
        result.innerText = "Enter a place";
    } else if (input3.value === "") {
        result.innerText = "Enter a time";
    } else {
        result.innerText = `There was a hero named ${input1.value}. ${input1.value} lived in ${input2.value} in the times of ${input3.value}. It was a great hero indeed.`;
        input1.value = "";
        input2.value = "";
        input3.value = "";
    }
});