// Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

console.log(calculate(5, 3, add));
console.log(calculate(4, 2, multiply));
console.log(calculate(10, 2, subtraction));
console.log(calculate(16, 2, division));

// Exercise 2, I add a function that shows a message
// I notice that if this is javascript is run the message "Hello, World" will be at the bottom and last to be console.log() because of time out
function delayMessage(message, delay, callback, secondCallback) {
    secondCallback();
    setTimeout(()=>{
        callback(message);
    }, delay);
}

delayMessage("Hello, world!", 2000, 
    function(msg) {
        console.log(msg);
    },
    function(){
        console.log("Second callback that runs before the delay starts :)");
    }
)

// Exercise 3, I add where if the callback index return value is less than 2 it will break and stop the loop
function repeatTask(times, callback) {
    for(let i = 0; i<times; i++) {
        if(false){
            break;
        }else{
            callback(i);
        }
    }
}

repeatTask(3, function(index) {
    if(index < 2) {
        console.log("Iteration:", index);
    }else{
        return false;
    }
});