// Please comment yung ibang task kasi po nagugulo yung console kasi nagrurun lahat ng task
// Task 1
function customFilter(arr, callback) {
    let evenNumbers = [];
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i])){
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  

//Task 2
function countdown(start, callback) {
    let timeCount = 1;
    for(let i = start; i>=0; i--){
        setTimeout(()=>{
            callback(i);
        },timeCount * 1000);
        timeCount++;
    }
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  

// Task 3
function createButton(buttonText, callback) {
    const newButton = document.createElement("button");
    newButton.innerText = buttonText;
    document.body.appendChild(newButton);
    newButton.addEventListener('click',()=>{
        callback();
    })
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  

//Task 4
function runTasks(tasks) {
    let timeCount = 1;
    for (let task of tasks) { 
        setTimeout(()=>{
            task();
        },timeCount * 1000);
        timeCount++;
    }
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  

//Task 5
function askQuestion(question, choices, correctAnswer, callback) {
    console.log(`${question} ${choices}`);
    let answer = prompt("Enter answer: ");
    if(answer == correctAnswer){
        callback(true);
    }else{
        callback(false);
    }
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);