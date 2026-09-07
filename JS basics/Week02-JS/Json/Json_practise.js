const fs=require("fs");
const { json } = require("stream/consumers");

const data=fs.readFileSync("user.json","utf-8");
console.log(data);

console.log(typeof data);

const user=JSON.parse(data);
console.log(user);

console.log(typeof user);

const jsondata=JSON.stringify(user);
console.log(jsondata);
