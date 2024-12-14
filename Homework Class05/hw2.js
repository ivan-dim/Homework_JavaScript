function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.displayReadingStatus = function () {
    if (this.readingStatus) {
      console.log(`Already read '${this.title}' by ${this.author}.`);
    } else {
      console.log(`You still need to read '${this.title}' by ${this.author}.`);
    }
  };
}

let title = prompt("Enter the book title:");
let author = prompt("Enter the book author:");
let readingStatusInput = prompt("Have you read this book? (yes/no):");
let readingStatus = readingStatusInput === "yes";

let book = new Book(title, author, readingStatus);

book.displayReadingStatus();
