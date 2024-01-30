#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
        this.value += 1;
    }
};

function displayObject(obj) {
    console.log(`{ type: '${obj.type}', value: ${obj.value}, incr: [Function] }`);
}

displayObject(myObject);
myObject.incr();
displayObject(myObject);
myObject.incr();
displayObject(myObject);
myObject.incr();
displayObject(myObject);
