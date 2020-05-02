const apiKey = "";

const rasb = require("../lib/index");
const RASB = new rasb(apiKey);

RASB.getBans().then((bans) => {
    console.log("Ran successfully");
    console.log("Result: " + bans.length); // should be an array of strings
}).catch((err) => {
    console.log("Error!");
    console.log(err);
});
