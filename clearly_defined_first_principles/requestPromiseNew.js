/*async get(coordinates) {

  try {
    const result = await promisify(this.blobService.getBlobToText)
    return JSON.parse(result)
  } catch (error) {
    if (error.statusCode === 404) return null
    throw error
  }
}
*/

const requestPromise = require("request-promise-native");

(async function simple () {

  const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    },
    url: 'https://www.reddit.com/r/funny.json',
    resolveWithFullResponse: true
  };

  const cases = {
    200: '200 OK -  Success',
    207: '207 - At least one item was not successfully indexed',
    429: '429 - You have exceeded your quota on the number of documents per index.',
    503: '503 -The system is under heavy load and your request cannot be processed at this time.'
  }

  try{
    const result = await requestPromise(options, function(err, res, body) {
        console.log("This uses the options object and makes a GET request to reddit for json and displays it below...... ");

        for (var key in cases)
          if (cases.hasOwnProperty(key)) {
             var values = cases[key];
             console.log("key",  key);
             console.log("values",  values);
          }

        console.log("POST returned with status %s", cases[res.statusCode]);
        let json = JSON.parse(body);
        console.log(json);
    })
  } catch (err) {

  }

  /*requestPromise(options, function(err, res, body) {
      console.log("This uses the options object and makes a GET request to reddit for json and displays it below...... ");
      let json = JSON.parse(body);
      console.log(json);
  });*/

  /*  return requestPromise({
     options
    })
    .then(function (res) {
        console.log("POST returned with status %d", res.statusCode);
    })
    .catch(function (err) {
        console.log("POST failed with status %d", err.statusCode);
        console.log(err)
    });
    */
}());
