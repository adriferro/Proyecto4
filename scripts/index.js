// Variables
const taskInput = document.getElementById('new-task');
const addButton = document.querySelector('button');
const taskList = document.getElementById('task-list');

// Agregar tarea
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)" style="background-color:red;">Eliminar</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Eliminar tarea
const removeTask = (button) => {
    const li = button.parentElement;
    taskList.removeChild(li);
}