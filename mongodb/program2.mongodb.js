use("infosys-mern-b3");

db.createCollection("orders");

db.orders.insertMany([
  {
    _id: "order_01",
    item: "Keyboard",
    amount: 400,
    customer_id: "cust_04",
  },
  {
    _id: "order_02",
    item: "Mouse",
    amount: 300,
    customer_id: "cust_04",
  },
  {
    _id: "order_03",
    item: "Monitor",
    amount: 12000,
    customer_id: "cust_03",
  },
  {
    _id: "order_04",
    item: "Keyboard",
    amount: 400,
    customer_id: "cust_01",
  },
  {
    _id: "order_05",
    item: "Mousepad",
    amount: 250,
    customer_id: "cust_02",
  },
]);
