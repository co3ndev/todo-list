let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

let container = document.querySelector("#theList");
let newInput = document.getElementById("newToDo");

function addTask(){
    let newTask = document.createElement("p"); // Create new task

    let taskText = newInput.value; // sets taskText to value of input

    if (taskText != 0){
        newTask.textContent = taskText; // Set task content of new element 
        container.appendChild(newTask); // Add task to bottom of list
        newInput.value = ""; // Reset button
        console.log(`Added ${newInput.value} to task list`); // Console export
    } else{
        return 0;
    }
}