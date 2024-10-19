function addTask() {
    let taskValue = document.getElementById("task").value;
    if (taskValue === "") {
        alert("Please enter a new task");
        return;
    }

    let p = document.createElement("p");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = () => {
        toggleTaskCompleted(p);
    }

    let taskText = document.createElement("span")
    taskText.textContent = taskValue;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
        removeTask(p);
    }


    p.appendChild(checkBox);
    p.appendChild(taskText);
    p.appendChild(removeBtn);

    document.getElementById("container").appendChild(p);

    document.getElementById("task").value = "";
}

function removeTask(taskItem){
    taskItem.remove();
}
function toggleTaskCompleted(taskItem) {
    let taskText = taskItem.querySelector("span")
    if (taskText.style.textDecoration === "line-through") {
        taskText.style.textDecoration = "none";
    }else {
        taskText.style.textDecoration = "line-through";
    }
}
