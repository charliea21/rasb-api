const apiKey = "";

const rasb = require("../lib/index");
const RASB = new rasb(apiKey);

RASB.isUserBanned("1237436").then((banned) => {
    console.log("Ran successfully");
    console.log("Result: " + banned); // should be false
}).catch((err) => {
    console.log("Error!");
    console.log(err);
});
