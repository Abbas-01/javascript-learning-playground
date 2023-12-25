const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const tasksContainer = document.querySelector(".taskSec");

addBtn.addEventListener("click", (e) => {
    const task = taskInput.value;
    if (task === "") {
        alert("Please give us valid character")
    } else {
        taskInput.value = "";

        const taskWrapper = createTaskWrapper()
        const taskContent = createTaskContent(task);
        const doneBtn = createButton("completeTaskBtn", 'taskBtns', "&checkmark;")
        const delBtn = createButton("delTaskBtn", "taskBtns", "&Cross;")

        tasksContainer.appendChild(taskWrapper);
        taskWrapper.append(taskContent, doneBtn, delBtn);

        let done = true;
        doneBtn.addEventListener("click", function () {
            if (done) {
                done = false
                taskContent.style.textDecoration = "line-through";
            } else {
                done = true
                taskContent.style.textDecoration = "none";
            }
        })
        delBtn.addEventListener("click", function () {
            tasksContainer.removeChild(taskWrapper)
        })
    }
})
function createTaskWrapper () {
    const taskWrapper = document.createElement("div");
    taskWrapper.classList.add("task");
    return taskWrapper;
}
function createTaskContent (task) {
    const taskContent = document.createElement("p");   
    taskContent.classList.add("taskContent");
    taskContent.innerHTML = `${task}`;
    return taskContent;
}

function createButton (classNameOne, classNameTwo, innerHTML) {
    const btn = document.createElement("button");
    btn.classList.add(classNameOne, classNameTwo);
    btn.innerHTML = innerHTML;
    return btn;
}