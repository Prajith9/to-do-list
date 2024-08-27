function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    input.value = ''; // Clear the input field
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}
