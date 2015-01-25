var fs = require('fs');
var request = require('request');

var dictionary = fs.readFileSync('./dictionary.txt').toString().split('\n');

dictionary.forEach(function(word) {
  request('https://registry.npmjs.org/' + word, function(err, res) {
    if(err) {
      console.error(err);
      process.exit(1);
    }

    if(res.statusCode === 404) {
      console.log(word);
    }
  });
});
