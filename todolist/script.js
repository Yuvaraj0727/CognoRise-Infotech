// task  taskList addTask

const task = document.getElementById("task")
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const warning = document.getElementById("warning")


addTask.addEventListener("click",()=>{
    if(task.value === ""){
        warning.textContent= "Please Add Task...!"
    }
    else{
        const taskText = task.value;
        const listItem = document.createElement("li");
        listItem.innerHTML =` 
                            ${taskText}  
                            <button class="deletebtn">Delete</button>`;
        taskList.appendChild(listItem);
        task.value = ""
        warning.textContent= "";
    }
})

taskList.addEventListener("click", (event)=>{
    if(event.target.classList.contains('deletebtn')){
        const listItem = event.target.parentElement;
        taskList.removeChild (listItem);
    }
})