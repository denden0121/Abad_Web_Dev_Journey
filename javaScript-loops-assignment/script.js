// Task 1
let number = 1;
for(let i = 1; i<=10; i++){
    console.log(`${number} X ${i} = ${number * i}`);
}

// Task 2
let n = 5, result = 0;
for(let i = 1; i<=n; i++){
    result += i;
}
console.log(`The sum of the first ${n} numbers is: ${result}`);

// Task 3
let grades = [99, 89, 75, 87, 92];
for(let i = 0; i<grades.length; i++){
    console.log(`Array Element: ${grades[i]}`);
}

// Task 4
let row = 5;
for(let i = 1; i<=row; i++){
    let print = "";
    for(let j = 1; j<=i; j++){
        print += "*"
    }
    console.log(print)
}

// Task 5
let count = [1, 2, 3, 4, 5];
for(let i = count.length-1; i>=0; i--){
    console.log(`Reversed Element: ${count[i]}`);
}
