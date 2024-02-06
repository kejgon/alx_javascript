const request = require('request')

const endpoint = 'https://swapi.dev/api/people/1'

//http://127.0.0.1:5000/people/1 - flask server

// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

request(endpoint, function (error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(response.statusCode); // Print the HTML for the Google homepage.
    // console.log(response.statusMessage); // Print the HTML for the Google homepage.
    // console.log(response.statusMessage); // Print the HTML for the Google homepage.
    const charObject = JSON.parse(body)
    console.log(charObject); // Print the HTML for the Google homepage.
    console.log(charObject); // Print the HTML for the Google homepage.

})

