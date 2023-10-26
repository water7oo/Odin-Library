const bookArea = document.getElementById("bookArea");
const bookTitle = document.getElementById("bookInput").value;
const newParagraph = document.createElement("p");

const myLibrary = [];

function Book(title) {
  this.title = title;
}

function addBooks() {
  const bookTitle = document.getElementById("bookInput").value;
  const newParagraph = document.createElement("p");
  newParagraph.textContent = bookTitle;

  bookArea.appendChild(newParagraph);

  document.getElementById("bookInput").value = "";

  const newBook = new Book(bookTitle);

  myLibrary.push(newBook);

  console.log(myLibrary);
  event.preventDefault();
}

function deleteRecent() {
  const lastChild = bookArea.lastChild;

  if (lastChild) {
    bookArea.removeChild(lastChild);
  }

  event.preventDefault();
}
function clearBooks() {
  while (bookArea.firstChild) {
    bookArea.removeChild(bookArea.firstChild);
  }
  event.preventDefault();
}
