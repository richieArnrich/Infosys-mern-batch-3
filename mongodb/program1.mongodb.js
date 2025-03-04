// to create a new database
use("infosys-mern-b3");

db.createCollection("customers");

// db.customers.insertOne({
//   _id: "cust_01",
//   firstname: "John",
//   lastname: "Doe",
//   age: 36,
//   country: "USA",
// });

// db.customers.insertMany([
//   {
//     _id: "cust_02",
//     firstname: "Jane",
//     lastname: "Doe",
//     age: 32,
//     country: "USA",
//   },
//   {
//     _id: "cust_03",
//     firstname: "Rahul",
//     lastname: "Sharma",
//     age: 28,
//     country: "India",
//   },
//   {
//     _id: "cust_04",
//     firstname: "Rohit",
//     lastname: "Hegde",
//     age: 35,
//     country: "India",
//   },
//   {
//     _id: "cust_05",
//     firstname: "Yaccob",
//     lastname: "Pasha",
//     age: 25,
//     country: "India",
//   },
//   {
//     _id: "cust_06",
//     firstname: "Robert",
//     lastname: "Luna",
//     age: 30,
//     country: "USA",
//   },
// ]);

// db.customers.find();

// fetch users only from USA
db.customers.find({ country: "USA" });
