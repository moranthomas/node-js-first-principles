/**  IN AZURE SEARCH JS
   * Index the given definition in the search system @param {Definition or Definition[]} definitions - the definition(s) to index
   */

const requestPromise = require("request-promise-native");

/* IIFE Not working inside class so commenting */
//class AzureSearch  {
// store(definitions) {    // Commmenting this and using IIFE instead

  (function simple () {
      //const entries = this._getEntries(Array.isArray(definitions) ? definitions : [definitions])
      return requestPromise({
        //method: 'POST',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        },
        //url: this._buildUrl(`indexes/${coordinatesIndexName}/docs/index`),
        url: 'https://www.reddit.com/r/funny.json',
        //headers: this._getHeaders(),
        //body: { value: entries },
        //withCredentials: false,
        resolveWithFullResponse: true
      })
      .then(function (res) {
          console.log("POST returned with status %d", res.statusCode);
      })
      .catch(function (err) {
          console.log("POST failed with status %d", err.statusCode);
          console.log(err)
      });
  }());
//}
