#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
        this.value += 1;
    }
};

// Convert object to JSON string with custom replacer
const jsonString = JSON.stringify(myObject, (key, value) => {
    if (typeof value === 'string' && key !== undefined) {
        return `${key}: '${value}'`;
    }
    return value;
});

console.log(jsonString);

function displayObject(obj) {
    console.log(`{ type: '${obj.type}', value: ${obj.value}, incr: [Function] }`);
}

myObject.incr();
displayObject(myObject);
myObject.incr();
displayObject(myObject);
myObject.incr();
displayObject(myObject);
