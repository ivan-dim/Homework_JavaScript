//didn't really understand the picture in the presentation so i did it like this

function atm(money) {
    let withdrawAmount = prompt("Enter amount to withdraw");
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        console.log("Invalid input.");
        return money;
    }
    if (money < withdrawAmount) {
        console.log("NO MONEY.. BROKE..");
    } else {
        money = money - withdrawAmount;
        console.log(`You withdrew: $${withdrawAmount}. Remaining balance: $${money}`);
    }
    return money;
}

let accountBalance = 5050;
accountBalance = atm(accountBalance);
console.log(`Balance: $${accountBalance}`);
