function atm(cashRequest) {

var balance = 100;
var cashRequest = parseInt(prompt("How much money do you want to withdraw?"))
var leftBalance = balance - cashRequest;
if (cashRequest > balance) {
    console.log(`You do not have ${cashRequest} in your balance.`)
    console.log(`Your current balance is: ${balance}`)
    
}
else if (cashRequest<=balance) {
    console.log(`Please take your ${cashRequest}`)
    console.log(`You have ${leftBalance} in your account`) }
}

atm();