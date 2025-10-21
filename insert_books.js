// insert_books.js

use("plp_bookstore");

db.books.insertMany([
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", published_year: 1925, price: 15.99, in_stock: true, pages: 180, publisher: "Scribner" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", published_year: 1960, price: 12.99, in_stock: true, pages: 281, publisher: "J.B. Lippincott & Co." },
  { title: "1984", author: "George Orwell", genre: "Dystopian", published_year: 1949, price: 13.99, in_stock: false, pages: 328, publisher: "Secker & Warburg" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published_year: 1937, price: 14.99, in_stock: true, pages: 310, publisher: "Allen & Unwin" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", published_year: 1951, price: 10.99, in_stock: true, pages: 277, publisher: "Little, Brown and Company" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", published_year: 1988, price: 11.99, in_stock: true, pages: 197, publisher: "HarperTorch" },
  { title: "Becoming", author: "Michelle Obama", genre: "Biography", published_year: 2018, price: 19.99, in_stock: true, pages: 448, publisher: "Crown" },
  { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", published_year: 2011, price: 18.99, in_stock: true, pages: 443, publisher: "Harper" },
  { title: "The Power of Habit", author: "Charles Duhigg", genre: "Self-help", published_year: 2012, price: 16.99, in_stock: false, pages: 371, publisher: "Random House" },
  { title: "Educated", author: "Tara Westover", genre: "Memoir", published_year: 2018, price: 17.99, in_stock: true, pages: 334, publisher: "Random House" }
]);
