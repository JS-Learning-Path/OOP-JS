class Library {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  searchBook(title) {
    return this.books.filter((book) => book.title === title);
  }
  allBookafterYear(year) {
    return this.books.filter((book) => book.year >= year);
  }
  getAllbook() {
    return this.books.map(
      (book) => `${book.title}, ${book.author}, ${book.year}`
    );
  }
}
const library = new Library();
library.addBook({ title: "Book 1", author: "Author 1", year: 2001 });
library.addBook({ title: "Book 2", author: "Author 2", year: 2002 });
library.addBook({ title: "Book 3", author: "Author 3", year: 2003 });
console.log(library.searchBook("Book 1"));
console.log(library.allBookafterYear(2002));
console.log(library.getAllbook());
