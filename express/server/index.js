//create a simple express server
/*
Steps to create a express server
1. import express
2. create an instance of express (object)
3. use the express object to create routes (a url which handles request,response)
4. use the express object to listen on a port (port number)
 */
const express = require("express");

const app = express();
//use the express object to create routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/message", (req, res) => {
  res.json({ message: "This is a json string" });
});

let users = [
  {
    name: "Spiderman",
    superpower: "Spider senses",
    src: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww",
  },
  {
    name: "Batman",
    superpower: "Gadgets",
    src: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fHww",
  },
  {
    name: "Superman",
    superpower: "Super strength",
    src: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cGVybWFufGVufDB8fDB8fHww",
  },
  {
    name: "Ironman",
    superpower: "Gadgets",
    src: "https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbm1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Black Widow",
    superpower: "Gadgets",
    src: "https://images.unsplash.com/photo-1574855784126-5555528e6dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t3aWRvd3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
