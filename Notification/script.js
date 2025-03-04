//target element
const container = document.getElementById('container');
//i used this count so so i can number each notification and know what to delete when i run a deleteNotification function
let count = 1;

//function
function generateNotification(){
    //every time i use this function it stop the timer for 5 seconds
    stopInterval();
    //select random message
    let message;
    switch(Math.floor(Math.random() * 4)){
        case 0 :
            message = "You have a new message!";
            break;
        case 1 :
            message = "New friend request!";
            break;
        case 2 :
            message = "Another device loggin into your account!";
            break;
        case 3 :
            message = "Accepted your friend request!";
            break;
    }
    //create element 
    //I also add a attributes for them like onclick,class and id so i can see what should i delete
    const div = document.createElement("div");
    const btn = document.createElement("button");
    div.setAttribute("id", count);
    div.setAttribute("class", "notif");
    btn.setAttribute("onclick", `deleteNotification(${count})`);
    div.textContent = message;
    btn.textContent = "X";
    container.appendChild(div);
    div.appendChild(btn);
    count++;
}

function deleteNotification(id){
    //every time i use this function it stop the timer for 5 seconds
    stopInterval();
    const select = document.getElementById(id);
    select.remove();
}
//I declate the timer outside the functions so i can access it anywhere
let timer;

function startInterval() {
    timer = setInterval(() => {
        const all = document.querySelectorAll('.notif');
        all.forEach(e => {
            e.remove();
        });
    }, 5000);
}

function stopInterval(){
    //stop timer
    clearInterval(timer);
    //start timer again after 5 seonds
    setTimeout(()=>{
        startInterval();
    },5000);    
}
//start timer
startInterval();