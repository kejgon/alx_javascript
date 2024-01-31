#!/usr/bin/node



const SquareBeh = require('./5-square');
class Square extends SquareBeh {
    charPrint(c = 'X') {
        if (c === undefined) {
            super.print();
        } else {
            for (let i = 0; i < this.height; i++) {
                for (let i = 0; i < this.width; i++) {
                    process.stdout.write(c);
                }
                console.log();
            }
        }
    }
}
module.exports = Square;