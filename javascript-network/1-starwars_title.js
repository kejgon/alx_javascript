// Import the request module
const request = require('request');

// Get the movie ID from command line arguments
const movieId = process.argv[2];

// Construct the endpoint  with the provided movie ID
const endpoint = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the specified endpoint 
request.get(endpoint, (error, response, body) => {
    if (error) {
        // If there's an error, print the error message
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        // If the response status code is not 200 (OK), print an error message
        console.error('Error:', response.statusCode);
    } else {
        // Parse the response body to get the movie title
        const movie = JSON.parse(body);
        // Print the title of the movie
        console.log(movie.title);
    }
});
