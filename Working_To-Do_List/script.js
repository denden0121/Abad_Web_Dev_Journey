//I reused my code from Notification activity and just change some parts
const container = document.getElementById("tasks");
let count = 1;

//function
function generateTodoList(){
    //stop auto remove for 5 seconds
    stopInterval();
    //input task value
    const taskName = document.getElementById("taskName");
    //create element
    const li = document.createElement("li");
    const a = document.createElement("a");
    const btn = document.createElement("button");
    li.setAttribute("id", count);
    li.setAttribute("class", "task");
    btn.setAttribute("onclick", `deleteTask(${count})`);
    a.textContent = taskName.value;
    btn.textContent = "remove";
    container.appendChild(li);
    li.appendChild(a);
    li.appendChild(btn);
    count++;
    taskName.value = "";
}

function deleteTask(id){
    //stop auto remove for 5 seconds
    stopInterval();
    const select = document.getElementById(id);
    alert(`Task removed:  ${select.textContent}`);
    select.remove();
}

let timer;

function startInterval() {
    timer = setInterval(() => {
        const all = document.querySelectorAll('.task');
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