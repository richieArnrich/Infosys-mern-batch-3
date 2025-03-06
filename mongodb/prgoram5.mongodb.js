use("infosys-mern-b3");

// db.getCollectionNames();

// db.shippings.find();

// db.orders.find();

// Write a function to fetch details of all orders
// along with customer details

// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "customers",
//       localField: "customer_id",
//       foreignField: "_id",
//       as: "customer",
//     },
//   },
//   {
//     $unwind: "$customer",
//   },
//   {
//     $project: {
//       _id: 0,
//       item: 1,
//       amount: 1,
//       customer_name: "$customer.firstname",
//       customer_country: "$customer.country",
//     },
//   },
// ]);

//show only item,amount,firstname,country
// display the firstname, shipmentid, order item, amount of that customer
console.log("from mogodb.js");
let shippingDetails = db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "_id",
      as: "customer",
    },
  },
  {
    $lookup: {
      from: "shippings",
      localField: "customer_id",
      foreignField: "customer",
      as: "shipping",
    },
  },
  {
    $unwind: "$customer",
  },
  {
    $unwind: "$shipping",
  },
  {
    $project: {
      _id: 0,
      item: 1,
      customerName: {
        $concat: ["$customer.firstname", " ", "$customer.lastname"],
      },
      amount: 1,
      shipping_status: "$shipping.status",
    },
  },
]);

printjson(shippingDetails);
