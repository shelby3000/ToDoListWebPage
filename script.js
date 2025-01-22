// script.js

// Selecting elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Add a task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button">Delete</button>
    `;

    // Mark task as completed on click
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Delete task
    taskItem.querySelector(".delete-button").addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the complete event
        taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input field
});
