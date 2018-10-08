const request = require('request');

const options = {
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

request(options, function(err, res, body) {
    console.log("This short program uses the options object and makes a get request to reddit for some funny json and displays it below...... ");
    let json = JSON.parse(body);
    console.log(json);
});
