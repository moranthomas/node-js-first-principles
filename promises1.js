(function simple () {
    let serviceResponse = new Promise((resolve, reject) => {
      console.log('Fired off the request promise')
        console.log('... and waiting for 2 seconds...')
        setTimeout(() => resolve('Thomas is the BEST !!'), 2000);
    });

    serviceResponse.then((msg) => {
        console.log(`Message is ${msg}`);
    }, () => {
        console.log('oops! its rejected');
    });
}());
