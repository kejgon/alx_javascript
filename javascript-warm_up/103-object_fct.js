#!/usr/bin/node

const myObject = {
    type: 'object',     // String property 'type' with value 'object'.
    value: 12,          // Numeric property 'value' with initial value 12.
    incr: function () { // Method 'incr': a function that increments the 'value' property by 1.
        this.value += 1;
    }
};

// Formatting of the First Object Output:
const firstObjectOutput = `{ type: '${myObject.type}', value: ${myObject.value} }`;

// Outputing of the First Object:
console.log(firstObjectOutput);

// Display Object Function:
function displayObject(obj) {
    console.log(`{ type: '${obj.type}', value: ${obj.value}, incr: [Function] }`);
}

// Calling incr Method and Displaying the Object:
myObject.incr();        // Incrementing 'value' property.
displayObject(myObject); // Displaying the updated object.s

myObject.incr();        // Incrementing 'value' property.
displayObject(myObject); // Displaying the updated object.

myObject.incr();        // Incrementing 'value' property.
displayObject(myObject); // Displaying the updated object.
