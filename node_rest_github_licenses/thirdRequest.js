/*
Recursive request chaining means nothing more than that we call a function that makes a request, which might call itself to make another request, and so on.
All that’s being returned are either promises or data, once the promise has been fulfilled and the request has been made.
The getUserRepos function checks if a list of retrieved repos has been passed to it, and if not, it will initialize that list.
Next, it goes on to check if the Link header of the response indicates that there are more pages to load, and triggers the getUserRepos function, i.e. itself, once again.
This time, repos gets passed, and will be built up with subsequent recursions. As a result, we end up with a full list of repositories for the current user. Next, we refine that list.
*/
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
  },


  getUserRepos: function(uri, repos) {
    return request({
      "method": "GET",
      "uri": uri,
      "json": true,
      "resolveWithFullResponse": true,
      "headers": {
        "Authorization": "Bearer " + github.token,
        "User-Agent": "My little demo app"
      }
    }).then(function(response) {
      if (!repos) {
        repos = [];
      }
      repos = repos.concat(response.body);
      console.log(repos.length + " repos so far");

      if (response.headers.link.split(",").filter(function(link){ return link.match(/rel="next"/) }).length > 0) {
        console.log("There is more.");
        var next = new RegExp(/<(.*)>/).exec(response.headers.link.split(",").filter(function(link){ return link.match(/rel="next"/) })[0])[1];
        return github.getUserRepos(next, repos);
      }
      return repos;
    });
  }
}

function main(params) {
  github.token = params.token;
  return github.getUser()
    .then(github.getUserReposUrl)
    .then(github.getUserRepos);
}

main({"token": process.argv[2]}).then(function(result) {
  console.log(result);
});
