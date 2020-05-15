class Book {
  constructor(author, title, genre){
    this.author = author;
    this.title = title;
    this.genre = genre;
  }
}

//old constructor
// const Book = function (author, title, genre) {
//   this.author = author;
//   this.title = title;
//   this.genre = genre;
// };

//new
export default Book;

// module.exports = Book;
