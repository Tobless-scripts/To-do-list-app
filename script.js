window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (tasks.length > 0) {
        tasks.forEach(task => {
            addToDom(task.text, task.completed);
        });
    }
};

function addToDom(text, completed) {
    let taskInput = document.createElement("p");
    taskInput.textContent = text; 

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = completed; 
    if (completed) {
        taskInput.style.textDecoration = "line-through";
        taskInput.style.color = "#ddd";
    }

    checkBox.addEventListener("click", () => {
        if (checkBox.checked) {
            taskInput.style.textDecoration = "line-through";
            taskInput.style.color = "#ddd";
            updateTaskInLocalStorage(text, true);
        } else {
            taskInput.style.textDecoration = "none";
            taskInput.style.color = "#000";
            updateTaskInLocalStorage(text, false);
        }
    });

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', () => {
        tasksDiv.remove();
        removeTaskFromLocalStorage(text);  
    });

    let tasksDiv = document.createElement("div");
    tasksDiv.classList.add("tasks");

    tasksDiv.appendChild(checkBox);
    tasksDiv.appendChild(taskInput);
    tasksDiv.appendChild(removeBtn);

    let taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(tasksDiv);

    let con = document.getElementById("container");
    con.appendChild(taskContainer);
}

function addTasks() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") {
        alert("Please enter a task");
        return;
    }

    addToDom(userInput, false);  
    saveTaskToLocalStorage(userInput, false);
    document.getElementById("userInput").value = ""; 
}

function saveTaskToLocalStorage(text, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: text, completed: completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskInLocalStorage(text, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.text === text) {
            task.completed = completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== text); 
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
