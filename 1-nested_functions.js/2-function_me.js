function welcomeMessage(fullName) {
    return function () {
        alert('Welcome ' + fullName);
    };
}

// Create three variables
var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');

// Test the functions
guillaume();
alex();
fred();
