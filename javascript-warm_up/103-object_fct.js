#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12,
    get incr() {
        return function () {
            this.value += 1;
        }.bind(this);
    }
};

console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
