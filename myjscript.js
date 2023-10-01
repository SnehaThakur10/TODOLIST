const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
addButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearAllTasks);
taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="check">&#10003;</span>
      <span>${taskText}</span>
      <span class="delete">X</span>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    addEventListeners(li);
  }
}
function addEventListeners(li) {
  const check = li.querySelector(".check");
  const deleteBtn = li.querySelector(".delete");
  check.addEventListener("click", toggleTask);
  deleteBtn.addEventListener("click", deleteTask);
}
function toggleTask(event) {
  const check = event.target;
  const task = check.parentElement;
  task.classList.toggle("completed");
}

function deleteTask(event) {
  const deleteBtn = event.target;
  const task = deleteBtn.parentElement;
  taskList.removeChild(task);  
}
  for (const task of tasks) {
    const check = task.querySelector(".check");
    const completed = task.classList.contains("completed");

    if (allCompleted) {
      task.classList.remove("completed");
      if (!completed) {
        check.textContent = "";
      }
    } else {
      task.classList.add("completed");
      if (!completed) {
        check.textContent = "✓";
      }
    }
  }
function clearAllTasks() {
  taskList.innerHTML = ""; // Clear all tasks
}
