//I just reused my code and change
const depositeBtn = document.getElementById('deposit_button');
const withdrawBtn = document.getElementById('withdraw_button');
const container = document.getElementById('container');
const notif = document.getElementById('notif');
const balanceText = document.getElementById('balance');

let balance = 4000;
let limit = 500;
parseInt(balance);
parseInt(limit);

function displayBalance(){
    //i turn the color back to  green since if I the daily limit is reached I turn the color to red
    balanceText.innerText = `Current Balance: $${balance}`;
    notif.style.color = "green";
}

displayBalance();

function displayHistory(status, input){
    //create eelemetns
    const li = document.createElement("li");
    li.innerText = `${status}: $${input}`;
    container.appendChild(li);
}

depositeBtn.addEventListener('click', ()=>{
    const input = document.getElementById('input_number').value;
    const deposit = parseInt(input);
    balance += deposit;
    notif.innerText = `Successfully deposited $${input}`;
    displayBalance();
    displayHistory("Deposit", deposit);
})

withdrawBtn.addEventListener('click', ()=>{
    const input = document.getElementById('input_number').value;
    const withdraw = parseInt(input);
    //not sure if this is okay but I separate the logic to have 2 different else statement for each error
    if(balance > 0 && input < balance){
        if(limit > 0 && (limit - withdraw >= 0)){
            balance -= withdraw;
            limit -= withdraw;
            notif.innerText = `Successfully withdrew $${input}`;
            displayBalance();
            displayHistory("Withdraw", withdraw);
        }else{
            notif.innerText = `Daily withdrawal limit reached`;
            notif.style.color = "red";
        }
    }else{
        alert(`You have $${balance}!`);
    }
})
