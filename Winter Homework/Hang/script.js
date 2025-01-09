let randomWord = "";
let container = document.getElementById("buttons-container");
let testWordElement = document.getElementById("testWord");
let hangmanImageElement = document.getElementById("hangmanImage");
let incorrectGuesses = 0;
let maxIncorrectGuesses = 7;

let hangmanImages = [
  "", 
  "imaegs/hangman_1.png",
  "imaegs/hangman_2.png",
  "imaegs/hangman_3.png",
  "imaegs/hangman_4.png",
  "imaegs/hangman_5.png",
  "imaegs/hangman_6.png",
  "imaegs/hangman_7.png"
];

fetch("words.json")
  .then((response) => response.json())
  .then((data) => {
    randomWord = data.data[Math.floor(Math.random() * data.data.length)];
    testWordElement.textContent = "_ ".repeat(randomWord.length).trim();
    // console.log(randomWord) 🤨
  })


for (let i = 65; i <= 90; i++) {
  let button = document.createElement("button");
  button.textContent = String.fromCharCode(i);
  button.onclick = () => {
    let letter = button.textContent.toLowerCase();
    let currentTestWord = testWordElement.textContent.replace(/ /g, "");
    let newTestWord = "";

    let foundLetter = false;
    for (let z = 0; z < randomWord.length; z++) {
      if (randomWord[z].toLowerCase() === letter) {
        newTestWord += randomWord[z];
        foundLetter = true;
      } else {
        newTestWord += currentTestWord[z];
      }
    }

    if (!foundLetter) {
      incorrectGuesses++;
      hangmanImageElement.src = hangmanImages[incorrectGuesses];
  
    }

    testWordElement.textContent = newTestWord.split("").join(" ");
    button.classList.add("guessed");
    button.disabled = true;

    if (newTestWord === randomWord) {
      Swal.fire({
        title: "W",
        text: `GG!: ${randomWord}`,
        icon: "success",
        timer: 5000,
        showConfirmButton: false,
        timerProgressBar: true
      }).then(() => {
        location.reload();
      });
    }

    if (incorrectGuesses === maxIncorrectGuesses) {
      Swal.fire({
        title: "LOSE",
        text: `L: ${randomWord}`,
        icon: "error",
        timer: 5000,
        showConfirmButton: false,
        timerProgressBar: true
      }).then(() => {
        location.reload();
      });
    }
  };
  container.appendChild(button);
}

document.getElementById("newWord").onclick = () => {
  location.reload();
}

window.onload = function() {
  document.getElementById("hangmanImage").src = "imaegs/hangman_0.png";
};
