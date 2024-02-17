document.getElementById('submitForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Reset error message
    resetErrorMessages();

    // Retrieve form field values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    // Perform validation
    var isValid = true;

    // Validate name
    if (name === '') {
        displayErrorMessage('nameError', 'Please enter your name.');
        isValid = false;
    }

    // Validate email
    if (email === '') {
        displayErrorMessage('emailError', 'Please enter your email address.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayErrorMessage('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        displaySuccessMessage('Form submitted successfully!');
        // You can submit the form here if needed
    }
});

function resetErrorMessages() {
    var errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

function displayErrorMessage(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function displaySuccessMessage(message) {
    var successElement = document.getElementById('successMessage');
    successElement.textContent = message;
}

function isValidEmail(email) {
    // Regular expression pattern to validate email format
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
