const myLibrary = [
  new Book(crypto.randomUUID(), "book1", "123", true),
  new Book(crypto.randomUUID(), "book2", "234", false),
  new Book(crypto.randomUUID(), "book3", "345", false),
];

function Book(id, title, pages, readed) {
  this.id = id;
  this.title = title;
  this.pages = pages;
  this.readed = readed;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function openCreateBookModal() {
  createBookModal.showModal();
}

function closeCreateBookModal() {
  createBookModal.close();
}

const newBookBtn = document.querySelector(".new-book-btn");

const createBookModal = document.querySelector(".create-book-modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

const bookContainer = document.querySelector(".book-container");

newBookBtn.addEventListener("click", openCreateBookModal);
modalCloseBtn.addEventListener("click", closeCreateBookModal);

myLibrary.forEach(bookInfo => {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");
  
  const bookInfoContainer = document.createElement("div");
  bookInfoContainer.classList.add("book-info-container");
  
  const bookTitle = document.createElement("div");
  bookTitle.classList.add("title");
  bookTitle.textContent = `${bookInfo.title}`;
  
  const bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  bookPages.textContent = `${bookInfo.pages}p`;

  bookInfoContainer.appendChild(bookTitle);
  bookInfoContainer.appendChild(bookPages);

  const bookBtnContainer = document.createElement("div");
  bookBtnContainer.classList.add("book-btn-container");

  const readBtn = document.createElement("button");
  readBtn.classList.add(bookInfo.readed ? "readed-btn" : "read-btn");
  readBtn.textContent = bookInfo.readed ? "Readed" : "Read";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete"

  bookBtnContainer.appendChild(readBtn);
  bookBtnContainer.appendChild(deleteBtn);

  bookElement.appendChild(bookInfoContainer);
  bookElement.appendChild(bookBtnContainer);

  bookContainer.appendChild(bookElement);
});