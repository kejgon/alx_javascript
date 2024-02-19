document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById('email').value.trim(); // Trim whitespace
    var errorElement = document.getElementById('error');

    // Reset error message
    errorElement.textContent = '';

    // Check if input is empty
    if (email === '') {
        errorElement.textContent = 'Email address cannot be empty.';
        return; // Exit function if input is empty
    }

    // Call validateEmail function
    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
    } else {
        // Email format is correct, allow form submission
        this.submit();
    }
});

function validateEmail(email) {
    // Regular expression pattern to validate email format
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
