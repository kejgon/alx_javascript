// Import the request module
const request = require('request');

// Get the Movie ID from command line arguments
const movieId = process.argv[2];

// Construct the URL with the provided Movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
    if (error) {
        // If there's an error, print the error message
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        // If the response status code is not 200 (OK), print an error message
        console.error('Error:', response.statusCode);
    } else {
        // Parse the response body to get the movie data
        const movie = JSON.parse(body);

        // Print each character name
        movie.characters.forEach(characterUrl => {
            // Make a GET request to the character URL
            request.get(characterUrl, (charError, charResponse, charBody) => {
                if (charError) {
                    // If there's an error, print the error message
                    console.error('Error:', charError);
                } else if (charResponse.statusCode !== 200) {
                    // If the response status code is not 200 (OK), print an error message
                    console.error('Error:', charResponse.statusCode);
                } else {
                    // Parse the response body to get the character data
                    const character = JSON.parse(charBody);
                    // Print the character name
                    console.log(character.name);
                }
            });
        });
    }
});
