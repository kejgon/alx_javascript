#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
};

console.log(myObject);

myObject.incr = function incr() {
    return function () {
        myObject.value += 1;
    };
};

console.log(myObject);

myObject.incr = myObject.incr();

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
