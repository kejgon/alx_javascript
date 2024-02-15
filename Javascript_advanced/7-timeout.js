console.log('Start of the execution queue');

setTimeout(function () {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
    console.log('End of the loop printing');
}, 0);

console.log('Final code block to be executed');
