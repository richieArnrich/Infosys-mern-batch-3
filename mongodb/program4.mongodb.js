use("infosys-mern-b3");

// Find out the customers whose shipping is still pending
// primary collection and which is my secondary collection
// primary collection : shippings
// secondary collection : customers

let pendingusers = db.shippings.aggregate([
  {
    $match: {
      status: "pending",
    },
  },
  {
    $lookup: {
      from: "customers",
      localField: "customer",
      foreignField: "_id",
      as: "customerInfo",
    },
  },
]);

// print the result
printjson(pendingusers);
