var inputNumberArray = process.argv;
var sum = 0;

for (var i = 2; i < inputNumberArray.length; i++) {
    sum += Number(inputNumberArray[i]);
}
console.log(sum);


var fs = require('fs')
fileBuffer = fs.readFileSync('/path/to/file');
// where file path will be provided by the input = process.argv[2];
