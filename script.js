let myLibrary = [
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

function clickReadButton(e) {
  const id = e.target.parentElement.parentElement.children[0].textContent;
  myLibrary = myLibrary.map(book => {
    if (book.id === id) {
      book.readed = !book.readed;
      return book;
    }
    return book;
  });
  refreshBookList();
}

function createBookElement(bookInfo) {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");
  
  const bookId = document.createElement("div");
  bookId.classList.add("book-id");
  bookId.style.display = "none";
  bookId.textContent = `${bookInfo.id}`;

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
  readBtn.classList.add("read-btn");
  if (bookInfo.readed) readBtn.classList.add("readed");
  readBtn.textContent = bookInfo.readed ? "Readed" : "Read";
  readBtn.addEventListener("click", clickReadButton);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete"

  bookBtnContainer.appendChild(readBtn);
  bookBtnContainer.appendChild(deleteBtn);

  bookElement.appendChild(bookId);
  bookElement.appendChild(bookInfoContainer);
  bookElement.appendChild(bookBtnContainer);

  return bookElement;
}

function refreshBookList() {
  bookContainer.textContent = "";
  myLibrary.forEach(book => {
    bookContainer.appendChild(createBookElement(book));
  });
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

refreshBookList();