
const requestPromise = require("request-promise-native");

(async function simple () {
//  async harvest(spec) {
    const headers = {
      //'X-token': this.options.authToken
      'X-token': 'authToken'
    }

    /*const body = (Array.isArray(spec) ? spec : [spec]).map(entry => {
      return {
        type: entry.tool,
        url: `cd:/${entry.coordinates}`,
        policy: entry.policy
      }
    })*/

    const body = {

    }

    const options = {
      url: 'https://www.reddit.com/r/funny.json',
      //url: '${this.options.url}/requests',
      method: 'POST',
      body,
      headers,
      json: true,
      resolveWithFullResponse: true,
    }

    const cases = {
      200: '200 OK -  Success',
      207: '207 - At least one item was not successfully indexed',
      400: '400 - Bad Request',
      401: '401 - Unauthorized',
      404: '404 - Not Found',
      429: '429 - You have exceeded your quota on the number of documents per index.',
      503: '503 -The system is under heavy load and your request cannot be processed at this time.'
    }

    try{
        const result = await requestPromise(options, function(err, res, body) {
          //let json = JSON.parse(body);
          //console.log(json);
          //console.log("POST returned with status %s", cases[res.statusCode]);
          if(cases[res.statusCode] === '200') {
            console.log(cases[res.statusCode]);
            return cases[res.statusCode]
          }
        })
    } catch (err) {
        //throw new Error(cases[err.statusCode]);
        //throw err
        //throw [err.statusCode];
                /* Getting UnhandledPromiseRejectionWarning: in all cases here */
        console.log('Error:', cases[err.statusCode]);
        return cases[err.statusCode]

    }
}());
