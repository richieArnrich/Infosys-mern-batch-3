const fs = require("fs");
let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
];
// write all users in userdata.txt file in row and column format
function writeUsers() {
  for (let user of users) {
    let data = `Id\t\t: ${user.id}\nName\t: ${user.name}\nAge\t\t: ${user.age}\n----------------\n`;
    fs.appendFileSync("userdata.txt", data);
    console.log(`${user.name} entered`);
  }
}

writeUsers();
