const request = require('request');
const Block = require('./block.js');

var blockArr = [];

request('http://localhost:3000', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred 
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  // console.log('body:', body); // Print the HTML for the Google homepage. 
  jsonRes = JSON.parse(body);
  for (let block of jsonRes) {
    blockArr.push(new Block(block));
    console.log(block);
    debugger;
  }
  console.log('TABLICA');
   console.log(blockArr);
  // console.log('zerowy');
  // console.log(blockArr[0].index);
  
});

// console.log(blockArr[0]['timestamp']);



