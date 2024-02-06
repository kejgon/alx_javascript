// Import the request module
const request = require('request');

// Get the API URL from command line arguments
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = '18';

// Make a GET request to the specified URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print the error message
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        // If the response status code is not 200 (OK), print an error message
        console.error('Error:', response.statusCode);
    } else {
        // Parse the response body to get the list of films
        const films = JSON.parse(body).results;

        // Filter films where Wedge Antilles is present
        const moviesWithWedge = films.filter(film =>
            film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
        );

        // Print the number of movies where Wedge Antilles is present
        console.log(moviesWithWedge.length);
    }
});
