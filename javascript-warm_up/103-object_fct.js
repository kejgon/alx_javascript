#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
};

console.log(myObject);

myObject.incr = function () {
    const incrFunction = function () {
        myObject.value += 1;
    };
    incrFunction.displayName = 'incr';
    return incrFunction;
};


myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
