
/* All this does is set up a GET request to the GitHub API, without any authorization, and very little handling of the response.
The interesting thing here is then, which is the main interface of the Promises API. */

var request = require('request-promise-native');

request({
  "method":"GET",
  "uri": "https://api.github.com/",
  "json": true,
  "headers": {
    "User-Agent": "My little demo app"
  }
}).then(console.log, console.log);
