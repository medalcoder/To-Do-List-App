// Select elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
        
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Delete task function
function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
