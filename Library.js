const bookArea = document.getElementById("bookArea");
const bookTitle = document.getElementById("bookInput").value;
const newParagraph = document.createElement("p");
const userInput = "";

addButton.disabled = true;

const myLibrary = [];

function Book(title, author, pageTotal, readStatus) {
  this.title = title;
  this.author = author;
  this.pageTotal = pageTotal;
  this.readStatus = readStatus;
}

function formChecker() {
  const bookTitle = document.getElementById("bookInput").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const totalPages = document.getElementById("totalPages").value;
  // const readStatus = document.getElementById("readStatus").value;

  // Check if any of the fields are empty
  if (bookTitle === "" || bookAuthor === "" || totalPages === "") {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
}

function addBooks() {
  const bookTitle = document.getElementById("bookInput").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const totalPages = document.getElementById("totalPages").value;
  const readStatus = document.getElementById("readStatus").value;

  const newBook = new Book(bookTitle, bookAuthor, totalPages, readStatus);

  myLibrary.push(newBook);
  console.log(myLibrary);
  showBooks();

  toggleOverlay();

  event.preventDefault();
}

function showBooks() {
  const bookArea = document.getElementById("bookArea");

  bookArea.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    // Create elements for book details
    const titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${book.title}`;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;

    const totalPagesElement = document.createElement("p");
    totalPagesElement.textContent = `Total Pages: ${book.pageTotal}`;

    const readStatusElement = document.createElement("p");
    readStatusElement.textContent = `Read Status: ${book.readStatus}`;

    // Append book details to the bookDiv
    bookDiv.appendChild(titleElement);
    bookDiv.appendChild(authorElement);
    bookDiv.appendChild(totalPagesElement);
    bookDiv.appendChild(readStatusElement);

    // Append the bookDiv to the bookArea
    bookArea.appendChild(bookDiv);
  });
}

function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  resetForm();
  event.preventDefault();
}

function resetForm() {
  document.getElementById("bookForm").reset();
  event.preventDefault();
}

function clearBooks() {
  while (bookArea.firstChild) {
    bookArea.removeChild(bookArea.firstChild);
  }
  event.preventDefault();
}
