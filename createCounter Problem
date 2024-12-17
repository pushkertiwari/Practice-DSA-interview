// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(init){
    let count = init;
    let tempVal = init;
    let increment =  function() {
        count = count + 1;
        return count;
    } 
    let decrement =  function() {
        count = count - 1
        return count;
    }
    let reset = function() {
        count = tempVal;
        return count;
    } 
    
    return {
        increment,
        decrement,
        reset
    }
}
const {increment,decrement, reset} = createCounter(0);

// ["increment","increment","decrement","reset","reset"]

console.log(increment());
console.log(increment());
console.log(decrement());
console.log(reset());
console.log(reset());



