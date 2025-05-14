import "./styles.css";
import * as _ from 'lodash';

class Library {
  public library: Array<Book> = []

  public addBook (book: Book)  {
    this.library.push(book);
  }

  drawHeader ()  {
    const headerDiv = document.createElement("header");
    document.body.appendChild(headerDiv)
  }

  drawTitle ()  {
    const titleDiv = document.createElement("h1");
    titleDiv.textContent = "Library!"
    document.querySelector("div#content").appendChild(titleDiv);
  }


  drawLibrary ()  {
    const contentDiv = document.querySelector("div#content");

    this.drawTitle();
    this.drawBooks();
    this.drawHeader();

    document.body.appendChild(contentDiv);
  }

  drawBooks () {
    const booksDiv = document.createElement("div");
    this.library.forEach((book) => {
      const contentDiv = document.querySelector("div#content");
      booksDiv.setAttribute("id", "books");
      // const contentDiv = document.querySelector("div#books");

      const bookDiv = document.createElement("div");
      bookDiv.setAttribute("id", "book");

      const bookTitle = document.createElement("div");
      const bookAuthor = document.createElement("div");
      const bookPages = document.createElement("div");

      // const titleLabel = document.createElement("div");
      // const authorLabel = document.createElement("div");
      // const pagesLabel = document.createElement("div");

      bookTitle.textContent = `Title: ${book.title}`;
      bookAuthor.textContent = `Author: ${book.author}`;
      bookPages.textContent = `Pages: ${book.pages}`;

      bookTitle.textContent = book.title;
      bookAuthor.textContent = book.author;
      bookPages.textContent = book.pages;

      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(bookAuthor);
      bookDiv.appendChild(bookPages);

      booksDiv.appendChild(bookDiv);
      contentDiv.appendChild(booksDiv);
    });
  }
}

class Book {
  title: string;
  author: string;
  pages: string;

  constructor(title: string, author: string, pages: string) {

    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  public id: string = crypto.randomUUID();

  info(): string {
    return `${this.title} by ${this.author} (${this.pages} pages.)`;
  };
}

// Example Books
const library = new Library;
const theHobbit = new Book("The Hobbit", "JRR Tolkien", "300");
const atomicHabits = new Book("Atomic Habits", "James Clear", "250");
// Example Books

// Adding Example Books
library.addBook(theHobbit);
library.addBook(atomicHabits);
// Adding Example Books

// console.log(library);

library.drawLibrary();
