# RASB API
A NPM package for interacting with the RASB Web API

## Getting Started
In order to use the RASB API you must obtain an API key.

## Example
```javascript
const rasb = require("rasb");
var RASB = new rasb("api key");

// Check if a user is banned

RASB.isUserBanned("12345").then((banned) => {
  if (banned) {
    console.log("User is banned!");
  } else {
    console.log("User isn't banned!");
  }
}).catch((err) => {
  console.log("Error processing request! " + err);
});
```

See [the wiki](https://github.com/charliea21/rasb-api/wiki) for more information.
