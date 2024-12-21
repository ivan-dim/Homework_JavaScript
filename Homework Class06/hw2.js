let numbers = [2, 4, 5];
let list = document.getElementById("numList");
let rez = document.getElementById("rez");

let sum = 0;
let equation = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    list.innerHTML += `<li>${numbers[i]}</li>`;
    if (i > 0) equation += ` + ${numbers[i]}`;
}

rez.innerText = `${equation} = ${sum}`;
