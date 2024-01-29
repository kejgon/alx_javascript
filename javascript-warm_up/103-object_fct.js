#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
};

console.log(myObject);

myObject.incr = function incr() {
    this.value += 1;
};

myObject.incr();
myObject.incr();
myObject.incr();
