const request = require('request');

var options = {
    url: 'https://mockbin.com/request',
    auth: {
        username: 'ScottWRobinson',
        password: 'myPassword'
    }
};

// This small program illustrates how to access sites that use basic access authentication using the auth option:
request.get(options);
