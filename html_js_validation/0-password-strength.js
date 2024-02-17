document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');

    // Reset error message
    errorElement.textContent = '';

    // Call validatePassword function
    var errorMessage = validatePassword(password);
    if (errorMessage) {
        errorElement.textContent = errorMessage;
    } else {
        // Password meets criteria, allow form submission
        this.submit();
    }
});

function validatePassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return 'Password must be at least 8 characters long.';
    }

    // Check for at least one uppercase letter
    var upperCaseLetters = /[A-Z]/g;
    if (!password.match(upperCaseLetters)) {
        return 'Password must contain at least one uppercase letter.';
    }

    // Check for at least one lowercase letter
    var lowerCaseLetters = /[a-z]/g;
    if (!password.match(lowerCaseLetters)) {
        return 'Password must contain at least one lowercase letter.';
    }

    // Check for at least one numeric digit
    var numbers = /[0-9]/g;
    if (!password.match(numbers)) {
        return 'Password must contain at least one numeric digit.';
    }

    // Check for at least one special character
    var specialCharacters = /[!@#$%^&*]/g;
    if (!password.match(specialCharacters)) {
        return 'Password must contain at least one special character (e.g., !@#$%^&*).';
    }

    // Password meets all criteria
    return '';
}
