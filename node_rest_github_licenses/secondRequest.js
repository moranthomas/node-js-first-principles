/* What is happening here is that we define a github object that serves as a holder for our token.
The token gets passed as a command line argument into main, where most of the action will be.
You will also notice the added getUser function, which is using authorization to get the user
profile of the currently logged in user as a JSON object. */


var request = require('request-promise-native');

var github = {
  token: null,

  getUser: function() {
    return request({
      "method":"GET",
      "uri": "https://api.github.com/user",
      "json": true,
      "headers": {
        "Authorization": "Bearer " + github.token,
        "User-Agent": "My little demo app"
      }
    });
  }
}

function main(params) {
  // pass the github personal access token in on the command line
  github.token = params.token;
  return github.getUser();
}

main({"token": process.argv[2]}).then(function(result) {
  console.log(result);
});
