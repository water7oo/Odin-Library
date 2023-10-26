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

function handleReadStatusChange(event, index) {
  const isChecked = event.target.checked;
  // Update the read status in your myLibrary array based on isChecked
  myLibrary[index].readStatus = isChecked ? "yes" : "no";
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
  const readStatusCheckbox = document.getElementById("readStatus").value;
  const readStatus = readStatusCheckbox.checked ? "yes" : "no";

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

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    // Create elements for book details
    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.className = "close-button";
    closeButton.addEventListener("click", () => removeBook(index));

    const titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${book.title}`;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;

    const totalPagesElement = document.createElement("p");
    totalPagesElement.textContent = `Total Pages: ${book.pageTotal}`;

    // Create a label for the readStatus checkbox
    const readStatusLabel = document.createElement("label");
    readStatusLabel.textContent = "Reading: ";

    const readStatusCheckbox = document.createElement("input");
    readStatusCheckbox.type = "checkbox";
    readStatusCheckbox.className = "readStatus";
    readStatusCheckbox.checked = book.readStatus === "yes";
    readStatusCheckbox.addEventListener("change", (event) =>
      handleReadStatusChange(event, index)
    );

    // Append the elements to the bookDiv
    bookDiv.appendChild(closeButton);
    bookDiv.appendChild(titleElement);
    bookDiv.appendChild(authorElement);
    bookDiv.appendChild(totalPagesElement);

    // Append the label and checkbox for the readStatus
    readStatusLabel.appendChild(readStatusCheckbox);
    bookDiv.appendChild(readStatusLabel);

    // Append the bookDiv to the bookArea
    bookArea.appendChild(bookDiv);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  showBooks();
}

function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  resetForm();
  formChecker();
  event.preventDefault();
}

function resetForm() {
  document.getElementById("bookInput").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("totalPages").value = "";

  event.preventDefault();
}
