// Import the request module
const request = require('request');

// Get the URL from command line arguments
const url = process.argv[2];

// Make a GET request to the specified URL
request.get(url, (error, response) => {
    if (error) {
        // If there's an error, print the error message
        console.error('Error:', error);
    } else {
        // If successful, print the status code
        console.log('code:', response.statusCode);
    }
});
