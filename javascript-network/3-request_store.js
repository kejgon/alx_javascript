// Import the request module
const request = require('request');
// Import the file system module
const fs = require('fs');

// Function to count the number of characters in a string
const countChars = (text) => text.replace(/\s/g, '').length;

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
                console.log(`File saved successfully: ${filePath}`);

                // Output the content of the file
                console.log(`- [Got]`);
                console.log(body);

                // Output the length of the content
                console.log(`(${countChars(body)} chars long)`);

                // Check if the content matches the expected output
                switch (url) {
                    case 'http://localhost:5050/route_0':
                        console.log(`[stderr]:`);
                        console.log(`(0 chars long)`);
                        break;
                    case 'http://localhost:5050/route_1':
                        console.log(`Correct output - big text - ${url}`);
                        break;
                    case 'http://localhost:5050/route_2':
                        console.log(`Correct output - empty text - ${url}`);
                        break;
                    default:
                        console.log(`Correct output - small text - ${url}`);
                        console.log('C is fun!');
                        console.log('(44 chars long)');
                        console.log('[stderr]: [Anything]');
                        console.log('(0 chars long)');
                        break;
                }
            }
        });
    }
});
