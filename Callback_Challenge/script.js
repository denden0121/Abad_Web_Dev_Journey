//I change the name variable result so it won't create error
//Task 1
let numbers = [1, 2, 3];

function customMap(numbers, callback){
    let doubledNumbers = [];
    for(let number of numbers){
        doubledNumbers.push(callback(number));
    }
    return doubledNumbers;
    
}

let doubled = customMap(numbers, function(num) {
     return num * 2; 
    });

console.log(doubled); 


//Task 2
function filter(array, callback){
    let filtered = [];
    for(let arr of array){
        if(callback(arr)){
            filtered.push(arr);
        }
    }
    return filtered;
}

let task2Result = filter([1,2,3,4,15], function(val) { return val<10; });
console.log(task2Result); 

//Task 3
function some(array, callback){
    for(let arr of array){
        if(callback(arr)){
            return true;
        }
    }
    return false;
}

let task3Result = some([1,2,3,4], function(val) { return val>5; });
console.log(task3Result); 

//Task 4
function every(array, callback){
    for(let arr of array){
        if(callback(arr)==false){
            return false;
        }
    }
    return true;
}

let task4Result = every([1,2,3], function(val) { return val>0; });
console.log(task4Result); 

//Task 5
function reduce(array, callback){
    let num = 0;
    for(let arr of array){
        num = callback(arr, num);
    }
    return num;
}

let sum = reduce([1,2,3], function(acc, num) { return acc + num; });
console.log(sum); 

//Task 6
function includes(array, callback){
    for(let arr of array){
        if(callback(arr)){
            return true;
        }
    }
    return false;
}

let task5Result = includes([1,2,3], function(val) { return val===2; });
console.log(task5Result); 