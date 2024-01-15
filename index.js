const taskInput = document.querySelector("#taskInputField");
const taskAddBtn = document.querySelector("#taskAddBtn");
const tasksSection = document.querySelector(".tasksSection");
const taskCategoriesSec = document.querySelector(".taskCategoriesSec");
const taskWrappers = [];

function showTasks (filterFuntion) {
    taskWrappers.forEach(taskContainer => {
    if (!filterFuntion || filterFuntion(taskContainer)) {
       taskContainer.style.display = "flex"; 
    } else {
        taskContainer.style.display = "none"; 
    }
    });
}


function taskCompleted (taskWrapper) {
    const isuncompleted = taskWrapper.id === "uncomplete"; 
    isuncompleted ? taskWrapper.id = "complete" : taskWrapper.id = "uncomplete";
    taskWrapper.firstElementChild.style.textDecoration = isuncompleted ? "line-through" : "none";
}

function deletingTask (taskWrapper) {
    taskWrappers.splice(taskWrappers.indexOf(taskWrapper), 1);
    tasksSection.removeChild(taskWrapper);
}

function creatingTask (task) {
    const taskWrapper = document.createElement("div");
    const taskContent = document.createElement("p");
    const taskBtnsWrapper = document.createElement("div");
    const taskCompleteBtn = document.createElement("button"); 
    const taskDeleteBtn = document.createElement("button"); 

    taskContent.textContent = `${task}`;
    taskCompleteBtn.innerHTML = `&checkmark;`;
    taskDeleteBtn.innerHTML = `&Cross;`;

    taskWrapper.classList.add("taskContainer");
    taskWrapper.setAttribute("id", "uncomplete");
    taskContent.classList.add("task");
    taskBtnsWrapper.classList.add("taskBtns");
    taskCompleteBtn.classList.add("complete");
    taskDeleteBtn.classList.add("del");

    tasksSection.appendChild(taskWrapper);
    taskWrapper.append(taskContent, taskBtnsWrapper);
    taskBtnsWrapper.append(taskCompleteBtn, taskDeleteBtn);

    taskCompleteBtn.addEventListener("click", () => {
        taskCompleted(taskWrapper);
    });

    taskDeleteBtn.addEventListener("click", () => {
        deletingTask(taskWrapper)
    });

    return taskWrapper;
}


taskAddBtn.addEventListener("click", (e) => {
    const task = taskInput.value;
    if (task) {
        taskWrappers.push(creatingTask(task));
        taskCategoriesSec.value = "all";
        showTasks();
    }
    taskCategoriesSec.addEventListener("change", () => {
        const selectedCategory = taskCategoriesSec.value;
        if (selectedCategory === "completed") {
            showTasks(taskWrapper => taskWrapper.id === "complete")
        } else if (selectedCategory === "uncompleted") {
            showTasks(taskWrapper => taskWrapper.id === "uncomplete");
        } else  {
            showTasks();
        } 
    })
    taskInput.value = "";
});