// Define the Book object constructor
function Book(title, author, price, isAvailable) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.isAvailable = isAvailable;
}

// Define the Inventory object constructor
function Inventory() {
  this.books = {};

  // Method to add a new book to the inventory
  this.addBook = function (book) {
    this.books[book.title] = book;
  };

  // Method to remove a book based on its title
  this.removeBook = function (title) {
    delete this.books[title];
  };

  // Method to find a book by its title
  this.findBook = function (title) {
    return this.books[title] || null;
  };

  // Method to list all available books
  this.listAvailableBooks = function () {
    let availableBooks = '';
    for (let title in this.books) {
      if (this.books[title].isAvailable) {
        availableBooks += this.books[title].title + '\n';
      }
    }
    return availableBooks.trim(); // Remove trailing newline
  };
}

// Test the Inventory system

// Create new Book objects
const book1 = new Book('JavaScript Basics', 'John Doe', 29.99, true);
const book2 = new Book('Advanced JavaScript', 'Jane Smith', 39.99, false);
const book3 = new Book('JavaScript for Experts', 'Emily Brown', 49.99, true);

// Create a new Inventory object
const inventory = new Inventory();

// Add books to the inventory
inventory.addBook(book1);
inventory.addBook(book2);
inventory.addBook(book3);

// Test removing a book
inventory.removeBook('Advanced JavaScript');

// Test finding a book
const foundBook = inventory.findBook('JavaScript for Experts');
console.log('Found Book:', foundBook);

// Test listing available books
const availableBooks = inventory.listAvailableBooks();
console.log('Available Books:\n', availableBooks);
