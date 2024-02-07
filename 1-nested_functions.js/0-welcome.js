function welcome(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    displayFullName();
}

// Test the function
welcome('Holberton', 'School');

// Uncomment the line below to test the reference error
// alert(fullName);
