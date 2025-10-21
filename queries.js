// queries.js
// -------------------------------------------
// Connect to the plp_bookstore database
use("plp_bookstore");

// ===========================================
// 🧩 TASK 2: BASIC CRUD OPERATIONS
// ===========================================

// Find all books in a specific genre (example: Fiction)
db.books.find({ genre: "Fiction" });

// Find books published after a certain year (example: after 2010)
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author (example: George Orwell)
db.books.find({ author: "George Orwell" });

// Update the price of a specific book (example: The Great Gatsby)
db.books.updateOne({ title: "The Great Gatsby" }, { $set: { price: 18.99 } });

// Delete a book by its title (example: The Alchemist)
db.books.deleteOne({ title: "The Alchemist" });

// ===========================================
// 🧠 TASK 3: ADVANCED QUERIES
// ===========================================

// Find books that are in stock AND published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Show only the title, author, and price (projection)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// Sort books by price (descending)
db.books.find().sort({ price: -1 });

// Pagination (5 books per page)
db.books.find().skip(0).limit(5); // Page 1
db.books.find().skip(5).limit(5); // Page 2

// ===========================================
// 📊 TASK 4: AGGREGATION PIPELINES
// ===========================================

// Calculate average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// Find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// ===========================================
// ⚡ TASK 5: INDEXING
// ===========================================

// Create an index on the title field
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Use explain() to check performance improvement
db.books.find({ title: "1984" }).explain("executionStats");
