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