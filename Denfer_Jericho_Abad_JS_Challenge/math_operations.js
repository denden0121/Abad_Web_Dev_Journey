let totalCost, item1 = 123, item2 = 456, item3 = 789;
totalCost = item1 + item2 + item3;
console.log("The total cost of the items is: $" + totalCost);

let average,num1 = 8, num2 = 9, num3 = 10;
average = (num1 + num2 + num3) / 3;
console.log("The average is: " + average);

let num = 15;
if(num % 2 == 0){
    console.log(num + " is an even number.");
}else{
    console.log(num + " is an odd number.");
}

let finalPrice, initialDiscount, price = 100, discount = 20;
initialDiscount = (price * discount) / 100;
finalPrice = price - initialDiscount;
console.log("The discount price is: $" + finalPrice);

let originalPrice = finalPrice / (1- discount / 100);
console.log("The original price is: $" + originalPrice);
