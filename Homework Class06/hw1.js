let paragraphs = document.querySelectorAll("p");
let header = document.querySelectorAll("h1, h2, h3");


for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].innerHTML = "Parag edited thru DOM";
}


for (let i = 0; i < header.length; i++) {
  header[i].innerHTML = "Header edited thru DOM";
}
