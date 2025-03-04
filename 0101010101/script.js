// const age = [12, 12, 24,32,3,12];

// for(let i = 0; i<age.length; i++){
//     if(age[i]==32){
//         console.log(`index: [${i}] -> age: ${age[i]}`);
//     }
// }

//______________________________________________________________________
// const student = {
//     name: "Denfer Jericho Abad",
//     age: 23,
//     course: "BSIT",
//     year: 4,
//     stack: [
//         "Javascript",
//         "PHP"
//     ]
// }

//______________________________________________________________________
// for(let key in student){
//     console.log(`key: ${key} -> value: ${student[key]}`);
// }

//______________________________________________________________________
// for(let row = 1; row <= 3; row++){
//     for(let col = 1; col <= 3; col++){
//         console.log(`${row} x ${col} = ${row * col}`)
//     }
// }
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9


//______________________________________________________________________

// // Task 1
// let number = 1;
// for(let i = 1; i<=10; i++){
//     console.log(`${number} X ${i} = ${number * i}`);
// }

// // Task 2
// let n = 5, result = 0;
// for(let i = 1; i<=n; i++){
//     result += i;
// }
// console.log(`The sum of the first ${n} numbers is: ${result}`);

// // Task 3
// let grades = [99, 89, 75, 87, 92];
// for(let i = 0; i<grades.length; i++){
//     console.log(`Array Element: ${grades[i]}`);
// }

// // Task 4
// let row = 5;
// for(let i = 1; i<=row; i++){
//     let print = "";
//     for(let j = 1; j<=i; j++){
//         print += "*"
//     }
//     console.log(print)
// }

// // Task 5
// let count = [1, 2, 3, 4, 5];
// for(let i = count.length-1; i>=0; i--){
//     console.log(`Reversed Element: ${count[i]}`);
// }

//______________________________________________________________________


// let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
// let inventoryCount = [10, 15, 5, 20, 7];

// for (let i = 0; i < inventory.length; i++) {
//   console.log(`${inventory[i]}: ${inventoryCount[i]}`);
// }

// let words = ["zebra", "apple", "mango", "cherry", "banana"];

// for (let i = 0; i < words.length; i++) {

//   for (let j = i + 1; j < words.length; j++) {

//     if (words[i] > words[j]) {

//       let temp = words[i];

//       words[i] = words[j];

//       words[j] = temp;

//     }
//   }
// }

// console.log(words);

/**
 * 
 * i = 0, j = 1
 * words[0] = "zebra"
 * words[1] = "apple"
 * temp = 
 * 
 * 
 * 
 * 
 */
// let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
// let inventoryCount = [10, 15, 5, 20, 7];

// for (let i = 0; i < inventory.length; i++) {
//   console.log(`${inventory[i]}: ${inventoryCount[i]}`);
// }

// let words = ["zebra", "apple", "mango", "cherry", "banana"];

// for (let i = 0; i < words.length; i++) {
//   for (let j = i + 1; j < words.length; j++) {
//     if (words[i] > words[j]) {
//       let temp = words[i];
//       words[i] = words[j];
//       words[j] = temp;
//     }
//   }
// }

// console.log(words);

// let uniqueNumbers = [];

// while (uniqueNumbers.length < 10) {
//   let randomNumber = Math.floor(Math.random() * 20) + 1;

//   // Check if the randomNumber already exists in the array
//   let exists = false;
//   for (let i = 0; i < uniqueNumbers.length; i++) {
//     if (uniqueNumbers[i] === randomNumber) {
//       exists = true;
//       break;
//     }
//   }

//   // If it doesn't exist, add it to the array
//   if (!exists) {
//     uniqueNumbers.push(randomNumber);
//   }
// }

// console.log(uniqueNumbers);

// let sideA = 7;
// let sideB = 10;
// let sideC = 5;

// if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
//   console.log(`The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`);
// } else {
//   console.log(`The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`);
// }

// function sayHi(name,age){
//     console.log(`Hi ${name}, so you are ${age} years old!`);
// }

// sayHi("Den", 23);

// function makeDish(ingredient1, ingredient2) {
//     console.log("Dish contains: " + ingredient1 + " and " + ingredient2);
// }

// makeDish("tomato", "cheese");  // Outputs: Dish contains: tomato and cheese
// makeDish("onion", "garlic");   // Outputs: Dish contains: onion and garlic

// function calculateDiscount(price, discountRate) {
//     let discount = price * (discountRate / 100);
//     console.log("The discount is: " + discount);
// }

// calculateDiscount(100, 20);  // Correct: 100 is price, 20 is discountRate
// calculateDiscount(20, 100);  // Incorrect: 20 is treated as discountRate, 100 as price


// function calculateTotal(price, quantity){
//     return price * quantity;
// }

// let item1 = calculateTotal(10, 10);
// console.log(`Total cost: ${item1} -> ${typeof item1}`);

// function isEven(number) {
//     return number % 2 === 0;
// }

// if (isEven(10)) {
//     console.log("It's even!");
// } else {
//     console.log("It's odd!");
// }

// function createAccount(name, age, username, password, designation, language){
//     return {
//         name: name,
//         isAdult: age >= 18,
//         username: username,
//         password: password,
//         designation: designation,
//         language: language
//     }
// }

// let language1 = ["Javascript", "PHP"];
// let language2 = ["Laravel"];

// let language = [...language1,...language2];

// let user = createAccount("Denden", 23, "denden01", "password123", "student", language);

// console.log(user)

// function calculateSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
  
//   let numbers = [1, 2, 3, 4];
//   console.log("Sum:", calculateSum(numbers));

/**
 * sum = 0;
 * 
 * i = 0 
 * arr[1] => 1
 * sum += 1* 0 += 1
 * sum = 1
 * i++
 * i < arr.length => true
 * 
 * i = 1
 * arr[1] => 2
 * sum += 2
 * 1 += 2
 * sum = 3
 * i++
 * i < arr.length => true
 * 
 * i = 2
 * arr[2] => 3
 * sum += 3
 * 3 += 3
 * sum = 6
 * i++
 * i < arr.length => true
 * 
 * i = 3
 * arr[3] => 4
 * sum += 4
 * 6 += 4
 * sum = 10
 * i++
 * i < arr.length => false
 * 
 * Sum: 10
 * 
 * 
 * 
 */

// sum = 0;

// i = 0
// arr[1] => 1
// sum += 1
// 0 += 1
// sum = 1
// i++
// i < arr.length => true

// i = 1
// arr[1] => 2
// sum += 2
// 1 += 2
// sum = 3
// i++
// i < arr.length => true

// i = 2
// arr[2] => 3
// sum += 3
// 3 += 3
// sum = 6
// i++
// i < arr.length => true

// i = 3
// arr[3] => 4
// sum += 4
// 6 += 4
// sum = 10
// i++
// i < arr.length => false

// Sum: 10

//-------------------------------------------------------------------------

// function isEven(num) {
//     if (num % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(isEven(4));
//   console.log(isEven(7));
//   console.log(isEven(0));

// function greet(name) {
//   return "Hello, " + name + "!";
// }

// function personalizedGreeting(names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(greet(names[i]));
//   }
// }

// let friends = ["Alice", "Bob", "Charlie"];
// personalizedGreeting(friends);

// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//     }
//     return reversed;
//   }
  
//   let originalArray = [10, 20, 30];
//   console.log(reverseArray(originalArray));
//   console.log(originalArray);

// function multiplyMatrix(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         matrix[i][j] *= 2;
//       }
//     }
//     return matrix;
// }
  
// let matrix = [
//     [1, 2],
//     [3, 4],
// ];

// console.log(multiplyMatrix(matrix));

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// greet("Alice", function() {
//     console.log("Welcome to the course!");
// });



// Exercise 2
// function swapFirstLast(arr) {  
//     let first = arr.shift();  
//     let last = arr.pop();  
//     arr.unshift(last);  
//     arr.push(first);  
//     return arr;  
//   }  
  
//   let numbers = [10, 20, 30, 40];  
// //   console.log(swapFirstLast(numbers));  
//   console.log(numbers);  

// console.log(numbers.pop())
// console.log(numbers)

// function updateStatus(tasks) {  
//     for (let task of tasks) {  
//       task.completed = !task.completed;  
//     }  
//     return tasks;  
//   }  
  
//   let taskList = [  
//     { id: 1, completed: false },  
//     { id: 2, completed: true }  
//   ];  
  
//   console.log(updateStatus(taskList));  
//   console.log(taskList);  

// function findValue(arr, target) {  
//     for (let i = 0; i < arr.length; i++) {  
//       if (arr[i] === target) {  
//         return `Found at index ${i}`;  
//       }  
//     }  
//     return "Not found";  
//   }  
  
//   let data = [5, 12, 8, 130, 44];  
//   console.log(findValue(data, 12));  
//   console.log(findValue(data, 100));  
// const name = document.getElementById('name');
// const img = document.getElementById('img');
// const btn = document.getElementById('clickMe');

// const displayRandom = () => {
    
//     fetch('https://randomuser.me/api/',{
//         method: 'GET',
//         headers: {'Content-Type':'application/json'}
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         name.innerText = data.results[0].name.first
//         img.src = data.results[0].picture.large
//         // displayRandom(data)
//     })
//     .catch(error => console.error(error))
// }

// // setInterval(()=>{
//     // displayRandom();
// // },1000)


// btn.addEventListener('click',()=>{
//     displayRandom();
// })
// ________________________________________________________________________________
// Exercise 1
// function calculate(num1, num2, operation) {
//     return operation(num1, num2);
// }

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function subtraction(a, b) {
//     return a - b;
// }

// function division(a, b) {
//     return a / b;
// }

// console.log(calculate(5, 3, add));
// console.log(calculate(4, 2, multiply));
// console.log(calculate(10, 2, subtraction));
// console.log(calculate(16, 2, division));

//Exercise 2
// function delayMessage(message, delay, callback, secondCallback) {
//     secondCallback();
//     setTimeout(()=>{
//         callback(message);
//     }, delay);
// }

// delayMessage("Hello, world!", 2000, 
//     function(msg) {
//         console.log(msg);
//     },
//     function(){
//         console.log("Second callback that runs before the delay starts :)");
//     }
// )

//Exercise 3
// function repeatTask(times, callback) {
//     for(let i = 0; i<times; i++) {
//         if(false){
//             break;
//         }else{
//             callback(i);
//         }
//     }
// }

// repeatTask(3, function(index) {
//     if(index < 2) {
//         console.log("Iteration:", index);
//     }else{
//         return false;
//     }
// });
// _____________________________________________________________
// function customFilter(arr, callback) {
//     let evenNumbers = [];
//     for(let i = 0; i<arr.length; i++){
//         if(callback(arr[i])){
//             evenNumbers.push(arr[i]);
//         }
//     }
//     return evenNumbers;
// }

// function isEven(num) {
//     return num % 2 === 0;
// }

// var numbers = [1, 2, 3, 4, 5, 6];
// var evenNumbers = customFilter(numbers, isEven);
// console.log(evenNumbers);  // Output: [2, 4, 6]

// _____________________________________________________________
// function countdown(start, callback) {
//     let timeCount = 1;
//     for(let i = start; i>=0; i--){
//         setTimeout(()=>{
//             callback(i);
//         },timeCount * 1000);
//         timeCount++;
//     }
// }

// function displayNumber(num) {
//     console.log(num);
// }

// countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

// _____________________________________________________________

// function createButton(buttonText, callback) {
//     const newButton = document.createElement("button");
//     newButton.innerText = buttonText;
//     document.body.appendChild(newButton);
//     newButton.addEventListener('click',()=>{
//         callback();
//     })
// }

// function buttonClicked() {
//     console.log("Button Clicked!");
// }

// createButton("Click Me", buttonClicked);  

// _____________________________________________________________
// function runTasks(tasks) {
//     let timeCount = 1;
//     for (let task of tasks) { 
//         setTimeout(()=>{
//             task();
//         },timeCount * 1000);
//         timeCount++;
//     }
// }

// function task1() {
//     console.log("Task 1 completed");
// }

// function task2() {
//     console.log("Task 2 completed");
// }

// function task3() {
//     console.log("Task 3 completed");
// }

// runTasks([task1, task2, task3]);  

// _____________________________________________________________
// function askQuestion(question, choices, correctAnswer, callback) {
//     // Your code here
//     console.log(`${question} ${choices}`);
//     let answer = prompt("Enter answer: ");
//     if(answer == correctAnswer){
//         callback(true);
//     }else{
//         callback(false);
//     }
// }

// function checkAnswer(isCorrect) {
//     if (isCorrect) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }
// }

// askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);

// _____________________________________________________________ Callback Challenge
// let numbers = [1, 2, 3];

// function customMap(numbers, callback){
//     let doubledNumbers = [];
//     for(let number of numbers){
//         doubledNumbers.push(callback(number));
//     }
//     return doubledNumbers;
    
// }

// let doubled = customMap(numbers, function(num) {
//      return num * 2; 
//     });

// console.log(doubled); // Should output: [2,4,6]


// _____________________________________________________________

// function filter(array, callback){
//     let filtered = [];
//     for(let arr of array){
//         if(callback(arr)){
//             filtered.push(arr);
//         }
//     }
//     return filtered;
// }

// let result = filter([1,2,3,4,15], function(val) { return val<10; });
// console.log(result); // Should output: [1,2,3,4]

// _____________________________________________________________
// function some(array, callback){
//     for(let arr of array){
//         if(callback(arr)){
//             return true;
//         }
//     }
//     return false;
// }

// let result = some([1,2,3,4], function(val) { return val>5; });
// console.log(result); // Should output: true

// _____________________________________________________________

// function every(array, callback){
//     for(let arr of array){
//         if(callback(arr)==false){
//             return false;
//         }
//     }
//     return true;
// }

// let result = every([1,2,3], function(val) { return val>0; });
// console.log(result); // Should output: true

// _____________________________________________________________

// function reduce(array, callback){
//     let num = 0;
//     for(let arr of array){
//         num = callback(arr, num);
//     }
//     return num;
// }

// let sum = reduce([1,2,3], function(acc, num) { return acc + num; });
// console.log(sum); // Should output: 6

// _____________________________________________________________
// function includes(array, callback){
//     for(let arr of array){
//         if(callback(arr)){
//             return true;
//         }
//     }
//     return false;
// }

// let result = includes([1,2,3], function(val) { return val===2; });
// console.log(result); // Should output: true

// let Warrior = [
//         {
//             name: "Zeus",
//             hp: 100,
//             stength: 12,
//             attack: function(){
//                 let attack = Math.floor(Math.random() * 13);
//                 return attack;
//             }
//         },
//         {
//             name: "Thor",
//             hp: 100,
//             stength: 12,
//             attack: function(){
//                 let attack = Math.floor(Math.random() * 13);
//                 return attack;
//             }
//         }
//     ]



// function battle(firstMove){
//     let status = firstMove;
//     let turns = 1;
//     const turnTakings = setInterval(()=>{
//     if(status){
//         health(Warrior[0].name, Warrior[0].attack(), turns)
//     }else{
//         health(Warrior[1].name, Warrior[1].attack(), turns)
//     }
//     status = !status;
//     turns++;

//     if(turns > 5){
//         clearInterval(turnTakings);
//         display();
//     }


//     }, 500);

// }

// function health(name, damage, round){
//     if(name == "Zeus"){
//         Warrior[1].hp -= damage;
//         console.log(`=== Round ${round} === `);
//         console.log(`${name} attack Thor with ${damage} damage -> Thor hp: ${Warrior[1].hp}`);
//     }
//     if(name == "Thor"){
//         Warrior[0].hp -= damage;
//         console.log(`=== Round ${round} === `);
//         console.log(`${name} attack Thor with ${damage} damage -> Zeus hp: ${Warrior[0].hp}`);
//     }
// }

// function attack(status){
//     if(status){
//         health(Warrior[0].name, Zeus.attack())
//     }else{
//         health(Warrior[1].name, Thor.attack())
//     }
// }

// function display(){
//     let winner;
//     if(Warrior[1].hp > Warrior[0].hp){
//         winner = `👑 Thor Wins 👑`;
//     }else if(Warrior[0].hp > Warrior[1].hp){
//         winner = `👑 Zeus Wins 👑`;
//     }else{
//         winner = "It's a Tie 💪"
//     }
//     console.log(winner)
// }

// function roll(){
//     let roll = Math.floor(Math.random() * 2);
//     if(roll == 1){
//         battle(true)
//     }else{
//         battle(false)
//     }
// }

// roll();

//__________________________________________________________________________________________

// const Warrior = [
//         {
//             name: "Zeus",
//             hp: 100,
//             stength: 12,
//             attack: function(){
//                 let attack = Math.floor(Math.random() * 13);
//                 return attack;
//             }
//         },
//         {
//             name: "Thor",
//             hp: 100,
//             stength: 12,
//             attack: function(){
//                 let attack = Math.floor(Math.random() * 13);
//                 return attack;
//             }
//         }
//     ]
// // I destructure the Warrior array and assign each object, so I can easily access the zeus and thor directly without acessing it using index
// const [zeus, thor] = Warrior;

// function battle(){
//     let turns = 1;
//     const battleTurn = setInterval(()=>{
            
//         let zeusDamage = zeus.attack();
//         let thorDamage = thor.attack();

//         zeus.hp -= thorDamage;
//         thor.hp -= zeusDamage;

//         display(turns, thorDamage, zeusDamage);

//         turns++;
//         if(turns > 10){
//             clearInterval(battleTurn);
//             result();
//         }

//     }, 500);

// }

// function display(turn, thorDamage, zeusDamage){
//     console.log(`=== Round ${turn} === `);
//     console.log(`Thor attacks Zeus and does ${thorDamage} damage!\nThor HP: ${thor.hp} | Zeus HP: ${zeus.hp}`);
//     console.log(`Zeus attacks Thor and does ${zeusDamage} damage!\nThor HP: ${thor.hp} | Zeus HP: ${zeus.hp}`);
// }

// function result(){
//     if(zeus.hp > thor.hp){
//         console.log("\n👑 Zeus WINS the battle! 👑");
//     }else if(thor.hp > zeus.hp){
//         console.log("\n⚡ Thor WINS the battle! ⚡");
//     }else{
//         console.log("\n💪 Battle ends in Draw 💪");
//     }
// }

// battle();


// //character object
// const character = {
//     name : "hero",
//     health : 100,
//     class : classGenerator(),
//     specialAbility : specialAbilityGenerator(),
//     randomizeHealth(){
//         this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
//     }
// }

// //Function that can be called to generate class
// function classGenerator() {
//     switch(Math.floor(Math.random() * 5)){
//         case 0 : 
//             return "Warrior";
//         case 1 : 
//             return "Mage";
//         case 2 : 
//             return "Archer";
//         case 3 :
//             return "Healer";
//         case 4 : 
//             return "Assassin";
//     }
// }

// //Function that can be called to generate special ability
// function specialAbilityGenerator(){
//     switch(Math.floor(Math.random() * 5)){
//         case 0 :
//             return "Fireball";
//         case 1 :
//             return "Healing Touch";
//         case 2 :
//             return "Stealth";
//         case 3 :
//             return "Lightning Strike";
//         case 4 : 
//             return "Power Slash";
//     }
// }

// //This function is used to create random character
// function generateCharacter(name = "none"){
//     //I first check if the user add a argument in the function and if they don't, It will select a random name
//     //I separate the random number selector to avoid have the same abilities,class,names,health
//     if(name == "none"){
//         switch(Math.floor(Math.random() * 5)){
//             case 0 :
//                 name = "Thorin";
//                 break;
//             case 1 :
//                 name = "Elara";
//                 break;
//             case 2 :
//                 name = "Zane";
//                 break;
//             case 3 :
//                 name = "Ivy";
//                 break;
//             case 4 :
//                 name = "Dante";
//                 break;
//         }
//     }
//     //This randomly select an ability
//     let specialAbility;
//     switch(Math.floor(Math.random() * 5)){
//         case 0 :
//             specialAbility = "Fireball";
//         case 1 :
//             specialAbility = "Healing Touch";
//         case 2 :
//             specialAbility = "Stealth";
//         case 3 :
//             specialAbility = "Lightning Strike";
//         case 4 : 
//             specialAbility = "Power Slash";
//     }
//     //This randomly select an class
//     let classGenerator;
//     switch(Math.floor(Math.random() * 5)){
//         case 0 : 
//             classGenerator = "Warrior";
//         case 1 : 
//             classGenerator = "Mage";
//         case 2 : 
//             classGenerator = "Archer";
//         case 3 :
//             classGenerator = "Healer";
//         case 4 : 
//             classGenerator = "Assassin";
//     }
//     //This randomly select an health
//     let healthGenerator = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
//     return {
//         name : name,
//         class : classGenerator,
//         health : healthGenerator,
//         specialAbility : specialAbility,
//         //This method is used to battle other characters
//         battle(target){
//             const originalHealth = target.health;
//             const attack = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
//             target.health -= attack;
//             console.log(`Character ${this.name} attacked Character ${target.name} with ${this.specialAbility}. ${target.name}'s health dropped from ${originalHealth} to ${target.health}.`);
//         }
//     }
// }

// //This function create an array of characters
// //First I accept an argument that let the function know how many characters are need to be generated, and the default value is 1
// //Then using forloop it will call the genereateCharacter() function then push the object into array, and return it
// function generateMultipleCharacters(count = 1){
//     let party = [];
//     for(let i = 0; i<count; i++){
//         party.push(generateCharacter());
//     }
//     return party;
// }

// //create 2 characters
// const player1 = generateCharacter("Denden");
// const player2 = generateCharacter();

// //create an array of 5 different characters
// const party = generateMultipleCharacters(5);
// //display party
// console.log(party);

// //battle, player1 attacks player2
// player1.battle(player2);
// player1.battle(player2);
// player1.battle(player2);

// //display players
// console.log(player1);
// console.log(player2);

//_______________________________________________________________

// const h1 = document.createElement("h1")

// const body = document.body
// const msg = document.getElementById('message');
// console.log(msg.innerHTML);
// console.log(msg.innerText);

// body.prepend(h1)

// h1.innerHTML = "HELLO"

//_______________________________________________________________
// Assume there is an element in the HTML: <h1 id="title">Welcome!</h1>
// var titleElement = document.getElementById("title");
// console.log(titleElement.innerText); // Outputs: "Welcome!"


// var items = document.getElementsByClassName("item");
// console.log(items.length); // Outputs the number of elements with the class "item"

// for(let item of items){
//     item.style.backgroundColor = "red"
//     item.style.margin = "50px 20px"
//     item.classList.add("items")
//     item.style.fontSize = "50px"
//     item.style.color = "white"
// }
// // Accessing the first element:
// console.log(items[0].innerText); // Outputs: "Item 1"

// // Assume the HTML has several <p> elements:
// var paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length); // Outputs the number of <p> elements found

// // Accessing the first paragraph:
// console.log(paragraphs[0].innerText);

// // Selects the first element with class "highlight"
// var highlightElement = document.querySelector(".items");
// highlightElement.style.backgroundColor = "blue"
// highlightElement.style.color = "white"
// highlightElement.style.fontSize = "100px"

//_______________________________________________________________
// Select an element with the ID "myLink"
// var link = document.getElementById("myLink");

// // Use setAttribute to change the value of the "href" attribute.
// // Here, "href" is the attribute name (first argument) and "https://newsite.com" is the new value (second argument).
// link.setAttribute("href", "https://newsite.com");

// // Now, when you check the link's href attribute, it should reflect the new value.
// console.log("Updated href:", link.getAttribute("href"));
// // Expected Output: "Updated href: https://newsite.com"
// // Select an element with the ID "myLink"
// var link = document.getElementById("myLink");

// // Retrieve the value of the "href" attribute
// // The method accepts one argument: the name of the attribute you want to retrieve.
// var currentHref = link.getAttribute("href");

// // Log the current href value to the console.
// console.log("Current href:", currentHref);

//____________________________________________________________________________

// const bio = document.getElementById('bio');

// function updateName(){
//     const name = document.getElementById('name');
//     const nameInput = document.getElementById('input_name').value;
//     name.innerText = nameInput;
// }
// function updateBio(){
//     const bio = document.getElementById('bio');
//     const bioInput = document.getElementById('input_bio').value;
//     bio.innerText = bioInput;
// }
// function updateProfile(){
//     const img = document.getElementById('profile');
//     img.src = "https://picsum.photos/200";
// }
// function updateColor(){
//     const bg = document.getElementById("card");
//     const color = document.getElementById('input_background_color').value;
//     bg.style.backgroundColor = color;
//     console.log(color)
// }
// function updateImg(){
//     const imgUrl = document.getElementById('input_img_url').value;
//     const img = document.getElementById('img');
//     img.src = imgUrl;
// }

//______________________________________________________________________________

//target element
// const container = document.getElementById('container');
// let count = 1;

// //function
// function generateNotification(){
//     stopInterval()
//     //select random message
//     let message;
//     switch(Math.floor(Math.random() * 4)){
//         case 0 :
//             message = "You have a new message!";
//             break;
//         case 1 :
//             message = "New friend request!";
//             break;
//         case 2 :
//             message = "Another device loggin into your account!";
//             break;
//         case 3 :
//             message = "Accepted your friend request!";
//             break;
//     }
//     //create element
//     const div = document.createElement("div");
//     const btn = document.createElement("button");
//     div.setAttribute("id", count);
//     div.setAttribute("class", "notif");
//     btn.setAttribute("id", count);
//     btn.setAttribute("onclick", `deleteNotification(${count})`);
//     div.textContent = message;
//     btn.textContent = "X";

//     container.appendChild(div);
//     div.appendChild(btn);

//     count++;
// }

// function deleteNotification(id){
//     const select = document.getElementById(id);
//     select.remove();
// }

// let timer;

// function startInterval() {
//     timer = setInterval(() => {
//         const all = document.querySelectorAll('.notif');
//         all.forEach(e => {
//             e.remove();
//         });
//     }, 5000);
// }

// function stopInterval(){
//     //stop timer
//     clearInterval(timer);
//     //start timer again after 5 seonds
//     setTimeout(()=>{
//         startInterval();
//     },5000);    
// }
// //start timer
// startInterval()
//_______________________________________________________________________________________________

// //I reused my code from Notification activity and just change some parts
// const container = document.getElementById("tasks");
// let count = 1;

// //function
// function generateTodoList(){
//     //stop auto remove for 5 seconds
//     stopInterval();
//     //input task value
//     const taskName = document.getElementById("taskName");
//     //create element
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     const btn = document.createElement("button");
//     li.setAttribute("id", count);
//     li.setAttribute("class", "task");
//     btn.setAttribute("onclick", `deleteTask(${count})`);
//     a.textContent = taskName.value;
//     btn.textContent = "remove";
//     container.appendChild(li);
//     li.appendChild(a);
//     li.appendChild(btn);
//     count++;
//     taskName.value = "";
// }

// function deleteTask(id){
//     //stop auto remove for 5 seconds
//     stopInterval();
//     const select = document.getElementById(id);
//     alert(`Task removed:  ${select.textContent}`);
//     select.remove();
// }

// let timer;

// function startInterval() {
//     timer = setInterval(() => {
//         const all = document.querySelectorAll('.task');
//         all.forEach(e => {
//             e.remove();
//         });
//     }, 5000);
// }

// function stopInterval(){
//     //stop timer
//     clearInterval(timer);
//     //start timer again after 5 seonds
//     setTimeout(()=>{
//         startInterval();
//     },5000);    
// }
// //start timer
// startInterval()
//_______________________________________________________________________________________________


// const depositeBtn = document.getElementById('deposit_button');
// const withdrawBtn = document.getElementById('withdraw_button');

// let balance = 4000;
// parseInt(balance);

// function displayBalance(){
//     const balanceText = document.getElementById('balance');
//     const notif = document.getElementById('notif');
//     balanceText.innerText = `Current Balance: $${balance}`;
// }

// displayBalance();


// depositeBtn.addEventListener('click', ()=>{
//     const input = document.getElementById('input_number').value;
//     const deposit = parseInt(input);
//     balance += deposit;
//     notif.innerText = `Successfully deposited $${input}`;
//     displayBalance();
// })

// withdrawBtn.addEventListener('click', ()=>{
//     const input = document.getElementById('input_number').value;
//     const withdraw = parseInt(input);
//     if(balance > 0 && input < balance){
//         balance -= withdraw;
//         notif.innerText = `Successfully withdrew $${input}`;
//         displayBalance();
//     }else{
//         alert(`You have $${balance}!`);
//     }
// })
//______________________________________________________________________


document.getElementById("container").addEventListener("click", function() {
    alert("You clicked the container!");

    // "this" refers to the element that triggered the event (in this case, 				#container)
    this.style.backgroundColor = "lightgray"; 
});

document.querySelectorAll(".color-box").forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Uncomment this to see the difference
        document.getElementById("container").style.backgroundColor = this.style.backgroundColor;
        alert("You clicked the " + this.textContent + " button!");
    });
});
