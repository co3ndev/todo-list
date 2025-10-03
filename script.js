let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

function addTask(){
    let container = document.querySelector("#theList");
    let newInput = document.getElementById("toDoForm");

    let newTask = document.createElement("li");

    let taskText = newInput.value;

    newTask.textContent = taskText;
    container.appendChild(newTask);
    newInput.value = "";
    console.log(`Added ${newInput} to task list`);
}