#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
        this.value += 1;
    }
};
const jsonString = JSON.stringify(myObject);

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
