
const requestPromise = require("request-promise-native");


(async function simple1 () {

  /**
   * Index the given definition in the search system @param {Definition or Definition[]} definitions - the definition(s) to index
   */

   const body = {

   }

   const headers = {

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

   const options = {
     //url: this._buildUrl(`indexes/${coordinatesIndexName}/docs/index`),
     method: 'POST',
     url: 'https://www.reddit.com/r/funny.json',
     //body: { value: entries },
     body,
     //headers: this._getHeaders(),
     headers,
     json: true,
     withCredentials: false,
     resolveWithFullResponse: true
   }


  //store(definitions) {
    //const entries = this._getEntries(Array.isArray(definitions) ? definitions : [definitions])

    try{
        const result = await requestPromise(options, function(err, res, body) {
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


/*(async function simple2 () {

   // Deletely the identified definition from the search system @param {EntityCoordinates} coordinates - the coordinates of the definition to delete

  // delete(coordinates) {
    return requestPromise({
      method: 'POST',
      url: this._buildUrl(`indexes/${coordinatesIndexName}/docs/index`),
      headers: this._getHeaders(),
      body: { value: [{ '@search.action': 'delete', key: this._getKey(coordinates) }] },
      withCredentials: false,
      resolveWithFullResponse: true
    })
    .then(function (res) {
        console.log("POST returned with status %d", handleResponseCodes(res.statusCode));
    })
    .catch(function (err) {
        console.log("POST failed with status %d", err.statusCode);
        console.log(err)
    });
  }


}());
*/
