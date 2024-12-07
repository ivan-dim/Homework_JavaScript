let year;

while (true) {
  let input = prompt("Enter Year");
  if (isNaN(input)) {
    alert("Invalid input");
  } else {
    year = input;
    break;
  }
}

let zodiacCalc = (year - 4) % 12;
let zodiacAnimal;

switch (zodiacCalc) {
  case 1:
    zodiacAnimal = "Rat";
    break;
  case 2:
    zodiacAnimal = "Ox";
    break;
  case 3:
    zodiacAnimal = "Tiger";
    break;
  case 4:
    zodiacAnimal = "Rabbit";
    break;
  case 5:
    zodiacAnimal = "Dragon";
    break;
  case 6:
    zodiacAnimal = "Snake";
    break;
  case 7:
    zodiacAnimal = "Horse";
    break;
  case 8:
    zodiacAnimal = "Goat";
    break;
  case 9:
    zodiacAnimal = "Monkey";
    break;
  case 10:
    zodiacAnimal = "Rooster";
    break;
  case 11:
    zodiacAnimal = "Dog";
    break;
  case 12:
    zodiacAnimal = "Pig";
    break;
}

alert(`The Zodiac Sign for the year ${year} is ${zodiacAnimal}`);
