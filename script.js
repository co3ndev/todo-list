const container = document.querySelector("#theList")
const newTask = document.createElement("ul");

function addTask(){
    newTask.textContent = newToDo;

    container.appendChild(newTask);
}