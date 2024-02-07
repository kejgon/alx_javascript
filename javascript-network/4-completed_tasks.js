// Import the request module
const request = require('request');

// Get the API URL from command line arguments
const apiUrl = process.argv[2];

// Make a GET request to the specified URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print the error message
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        // If the response status code is not 200 (OK), print an error message
        console.error('Error:', response.statusCode);
    } else {
        // Parse the response body to get the list of tasks
        const tasks = JSON.parse(body);

        // Initialize an object to store the number of completed tasks for each user
        const completedTasksByUser = {};

        // Loop through each task
        tasks.forEach(task => {
            // Check if the task is completed (completed property is true)
            if (task.completed) {
                // If the user ID already exists in the completedTasksByUser object, increment the count
                // Otherwise, initialize the count to 1
                completedTasksByUser[task.userId] = completedTasksByUser[task.userId] ? completedTasksByUser[task.userId] + 1 : 1;
            }
        });

        // Print the completedTasksByUser object
        console.log(completedTasksByUser);
    }
});
