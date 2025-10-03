let container = document.querySelector("#theList");
let newTask = document.createElement("li");

function addTask(){
    let newInput = document.getElementById("newToDo");

    newTask.textContent = newInput;
    container.appendChild(newTask);
    return addTask();
}