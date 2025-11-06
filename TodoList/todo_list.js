const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

//Dichiarazione di array vuoto per immagazzinare i dati. 
let tasks = [];
//Funzione per aggiungere il task all'array
function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks();
            }
        }
//Funzione per visualizzare il task nell'array
function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
//Funzione per visualizzare il completamento o meno nell'array
function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }
        }

//Funzione per cancellare il task completato nell'array
function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            displayTasks();
        }

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);