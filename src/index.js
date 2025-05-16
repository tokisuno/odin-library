import "./styles.css";

function Library () {
  this.library = []

  this.addBook = (book) => {
    this.library.push(book);
  }

  this.drawHeader = () => {
    const headerDiv = document.createElement("header");
    document.body.appendChild(headerDiv)
  }

  this.drawTitle = () => {
    const titleDiv = document.createElement("h1");
    titleDiv.textContent = "Library!"
    document.querySelector("div#content").appendChild(titleDiv);
  }


  this.drawLibrary = () => {
    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = ''

    this.drawTitle();
    this.drawBooks();
    this.drawHeader();

    document.body.appendChild(contentDiv);
  }

  this.drawBooks = () => {
    const booksDiv = document.createElement("div");
    this.library.forEach((book) => {
      const contentDiv = document.querySelector("div#content");
      booksDiv.setAttribute("id", "books");

      const bookDiv = document.createElement("div");
      bookDiv.setAttribute("id", "book");

      const bookTitle = document.createElement("div");
      const bookAuthor = document.createElement("div");
      const bookPages = document.createElement("div");
      const bookRead = document.createElement("button");

      bookRead.addEventListener("click", () => {
        book.toggleReadStatus();
        book.setReadText();
        bookRead.textContent = book.readText;
        console.log(book.read);
      })

      bookTitle.textContent = book.title;
      bookAuthor.textContent = book.author;
      bookPages.textContent = book.pages;
      bookRead.textContent = book.readText;
      // book.read === true ? bookRead.textContent = "read" : bookRead.textContent = "unread";

      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(bookAuthor);
      bookDiv.appendChild(bookPages);
      bookDiv.appendChild(bookRead);

      booksDiv.appendChild(bookDiv);
      contentDiv.appendChild(booksDiv);
    });
  }
}

function Book (title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.readText = this.read === true ? "read" : "unread";
  this.id = crypto.randomUUID();

  this.info = () => {
    return `${this.title} by ${this.author} (${this.pages} pages.)`;
  };

  this.toggleReadStatus = () => {
    this.read = !this.read;
    this.setReadText();
    console.log(this.readText);
  }

  this.setReadText = () => {
    this.read === true ? this.readText = "read" : this.readText = "unread";
  }
}

// Example Books
const library = new Library;
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 300);
const atomicHabits = new Book("Atomic Habits", "James Clear", 250);
// Example Books

// Adding Example Books
library.addBook(theHobbit);
library.addBook(atomicHabits);
// Adding Example Books

// console.log(library);

library.drawLibrary();

// Form requests
const showButton = document.querySelector("button#show-dialog");
const dialog = document.querySelector("dialog#dialog");
const closeButton = document.querySelector("button#cancelBtn");
const confirmButton = document.querySelector("button#confirmBtn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

confirmButton.addEventListener("click", (e) => {
  const title = document.querySelector("input#titleBox");
  const author = document.querySelector("input#authorBox");
  const pages = document.querySelector("input#pageBox");
  console.log(title.value);

  library.addBook(new Book(title.value, author.value, pages.value))
  library.drawLibrary();
  e.preventDefault();
  dialog.close();
});
