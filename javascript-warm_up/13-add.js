function add(a, b) {
    return a + b;
}

const { argv } = require('process');
console.log(add(parseInt(argv[2]), parseInt(argv[3])));