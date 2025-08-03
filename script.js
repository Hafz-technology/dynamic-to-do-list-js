document.addEventListener('DOMContentLoaded', function() {

        const addButton = document.getElementById('add-task-btn');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText == "") {
                alert("Enter a task");
            } else {
                const newTask = document.createElement('li');
                newTask.textContent = taskText;
                
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.className =  'remove-btn';
                removeButton.onclick = () => {
                    newTask.remove();
                }
                newTask.appendChild(removeButton);
                taskList.appendChild(newTask);
                taskInput.value = '';



            }
        }

        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask()
            }
        } )

document.addEventListener('DOMContentLoaded', addTask);








});