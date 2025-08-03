document.addEventListener('DOMContentLoaded', function() {
        const addButton = document.getElementById('add-task-btn');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');

        const loadTasks = () => {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.forEach(taskText => {
                createTaskElement(taskText);
            });
        };

        const createTaskElement = (taskText) => {
            const newTask = document.createElement('li');
                newTask.textContent = taskText;
                
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-btn')  ;
                removeButton.onclick = () => {
                    newTask.remove();
                    saveTasks();
                }
                newTask.appendChild(removeButton);
                taskList.appendChild(newTask);

        }
        

        const saveTasks = () => {
            const tasks = [];
            taskList.querySelectorAll('li').forEach(li => {
            // Get the text content of the list item, excluding the "Remove" button's text
                tasks.push(li.childNodes[0].textContent.trim());
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };
        

        












        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText == "") {
                alert("Enter a task");
            } else {
                const newTask = document.createElement('li');
                newTask.textContent = taskText;
                
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-btn')  ;
                removeButton.onclick = () => {
                    newTask.remove();
                    saveTasks();
                }
                newTask.appendChild(removeButton);
                taskList.appendChild(newTask);
                taskInput.value = '';
                saveTasks();



            }
        }

        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask()
            }
        } )

        
        document.addEventListener('DOMContentLoaded', addTask);
        
        
        
        loadTasks();












});