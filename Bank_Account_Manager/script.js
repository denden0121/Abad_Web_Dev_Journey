//When I add / subtract input into the balance it keeps, concatinating strings hahaha
//So I parsInt both balance and input values

const depositeBtn = document.getElementById('deposit_button');
const withdrawBtn = document.getElementById('withdraw_button');

let balance = 4000;
//I convert the balance to Int
parseInt(balance);

function displayBalance(){
    const balanceText = document.getElementById('balance');
    const notif = document.getElementById('notif');
    balanceText.innerText = `Current Balance: $${balance}`;
}

displayBalance();

depositeBtn.addEventListener('click', ()=>{
    const input = document.getElementById('input_number').value;
    const deposit = parseInt(input);
    balance += deposit;
    notif.innerText = `Successfully deposited $${input}`;
    displayBalance();
})

withdrawBtn.addEventListener('click', ()=>{
    const input = document.getElementById('input_number').value;
    const withdraw = parseInt(input);
    //I also add this conditional statement where you can't withdraw if your input is greater than your balance to avoid error.
    if(balance > 0 && input < balance){
        balance -= withdraw;
        notif.innerText = `Successfully withdrew $${input}`;
        displayBalance();
    }else{
        alert(`You have $${balance}!`);
    }
})
