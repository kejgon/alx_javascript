// Import the request module
const request = require('request');
// Import the file system module
const fs = require('fs');

// Get the URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
    if (error) {
        // If there's an error, print the error message
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        // If the response status code is not 200 (OK), print an error message
        console.error('Error:', response.statusCode);
    } else {
        // Write the response body to the specified file path
        fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
            if (err) {
                // If there's an error writing the file, print the error message
                console.error('Error writing file:', err);
            } else {
                // If successful, print a success message
                console.log('File saved successfully:', filePath);
            }
        });
    }
});
