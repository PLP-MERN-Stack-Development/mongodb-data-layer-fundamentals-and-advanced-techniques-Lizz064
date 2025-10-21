
use("plp_bookstore");
//TASK 2: BASIC CRUD OPERATIONS
db.books.find({ genre: "Fiction" });
db.books.find({ published_year: { $gt: 2010 } });
db.books.find({ author: "George Orwell" });
db.books.updateOne({ title: "The Great Gatsby" }, { $set: { price: 18.99 } });
db.books.deleteOne({ title: "The Alchemist" });

//TASK 3: ADVANCED QUERIES 
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });
db.books.find().sort({ price: 1 });
db.books.find().sort({ price: -1 });
db.books.find().skip(0).limit(5); 
db.books.find().skip(5).limit(5); 

//TASK 4: AGGREGATION PIPELINES
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

//TASK 5: INDEXING
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: 1 });
db.books.find({ title: "1984" }).explain("executionStats");
