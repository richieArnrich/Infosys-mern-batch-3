const fs = require("fs");

function writeIntoFile(data) {
  fs.appendFileSync("data.txt", data);
  console.log("Data written into file");
}

let data = `The room is unfamiliar. I don't know how I got here. But I know it to be a prison cell, 
cold and dank.I remember that the Praesidium of Magistrates say I am to die. They say I killed a man, 
that I am a murderer. Maybe these things are true, but they are only part of the truth.`;

// writeIntoFile(data);

function readJson() {
  const users = fs.readFileSync("users.json", "utf-8");
  console.log(users);
}

readJson();
