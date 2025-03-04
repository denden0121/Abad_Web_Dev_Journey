// Task 1. I don't know it it's okay but i add a statement where if the user input is not 0 - 100 it will show error
let score = 100;
if(score>100){
    console.log("Error: Make sure the score is 0 - 100");
}else if(score>=90){
    console.log("Grade A");
}else if(score>=80){
    console.log("Grade B");
}else if(score>=70){
    console.log("Grade C");
}else if(score>=60){
    console.log("Grade D");
}else if(score<60){
    console.log("Grade F");
}

// Task 2
let temperature = 80;
if(temperature<0){
    console.log("It's freezing outside! Bundle up!");
}else if(temperature<=15){
    console.log("It's cold outside. Wear a Jacket");
}else if(temperature<=30){
    console.log("The weather is nice. Enjoy your day!");
}else if(temperature>30){
    console.log("It's hot outside. Stay hydrated!");
}

// Task 3
let age = 8;
if(age < 13){
    console.log("You are to young for this activity.");
}else if(age < 17){
    console.log("You need parental permission.");
}else{
    console.log("You are elibigle for this activity");
}

// Task 4. I used the task 3 age variable and try to nest the switch statement to make it look cleaner.
age = 23;
let isMember = true;
if(age >= 12){
    if(isMember){
        console.log("The ticket costs $10.");
    }else{
        console.log("The ticket costs $15.");
    }
}else{
    console.log("The ticket is free");
}

// Task 5. I read that function can return if a statement inside it is true or false, so i tried to make it look like this
// not sure if this is good practice

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
}
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 
console.log(isLeapYear(2022)); 
console.log(isLeapYear(2023)); 
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2025)); 