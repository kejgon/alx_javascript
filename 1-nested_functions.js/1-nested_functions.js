// Create a variable named globalVariable with value Welcome
var globalVariable = "Welcome";

// Create a function outer that:
function outer() {
    // alerts the content of the variable globalVariable
    alert(globalVariable);

    // creates a variable named course with value Holberton
    var course = "Holberton";

    // creates a function inner that:
    function inner() {
        // alerts the content of the variable globalVariable and course (concatenated)
        alert(globalVariable + " " + course);

        // creates a variable named exclamation with value !
        var exclamation = "!";

        // creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
        function inception() {
            alert(globalVariable + " " + course + exclamation);
        }

        // calls the function inception
        inception();
    }

    // calls the function inner
    inner();
}

// Call the function outer
outer();

// Call the function inner within outer
// Not necessary since inner is called within outer

// Call the function inception within inner
// Not necessary since inception is called within inner
