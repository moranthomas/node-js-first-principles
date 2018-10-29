const requestPromise = require('request-promise-native')

class CrawlingHarvester {
  constructor(options) {
    console.log('gets called?')
    this.options = options
  }

// An async function will always return a promise and you have to use
// .then() or await to aaccess its value

  async harvest(spec) {
    const headers = {
      'X-token': this.options.authToken
    }
    const body = (Array.isArray(spec) ? spec : [spec]).map(entry => {
      return {
        type: entry.tool,
        url: `cd:/${entry.coordinates}`,
        policy: entry.policy
      }
    })
    console.log('lost')
    return requestPromise({
      url: `${this.options.url}/requests`,
      method: 'POST',
      body,
      headers,
      json: true,
      resolveWithFullResponse: true
    })
    .then(function (response) {
        console.log("POST succeeded with status %d", response.statusCode);
    })
    .catch(function (err) {
        console.log("POST failed with status %d", err.statusCode);
        console.log(err)
    });
  }
}


const options = {
  authToken: "blah",
  url: "http://www.google.com"
}


let ch = new CrawlingHarvester(options);

/*ch.harvest('spec').catch(function (err) {
    console.log(err)
});*/


(async() => {
  console.log('1')
  await ch.harvest('spec')
  console.log('2')
})()


module.exports = options => new CrawlingHarvester(options)
