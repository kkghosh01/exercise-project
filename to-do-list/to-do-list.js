const toDoList = [];

renderTodoList();

function renderTodoList() {
    let toDoListHTML = '';
    for(let i = 0; i < toDoList.length; i++) {
        const toDoObject = toDoList[i];
        const {name, time, dueDate} = toDoObject;
        toDoListHTML += `
            <div class="todo-item">
                <span>${name} - ${time} - ${dueDate}</span>
                <button class="delete-btn js-delete-btn">Delete</button>
            </div>`;
    }
    document.querySelector(".js-todolist-name").innerHTML = toDoListHTML;
    document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            toDoList.splice(index, 1);
            renderTodoList();
        })
    })
}

document.querySelector('.todo-add-btn').addEventListener('click', () => {
    getToDoList();
})

function getToDoList() {
    const inputElement = document.querySelector(".js-todo-name");
    const name = inputElement.value;
    const timeInputElement = document.querySelector(".js-todo-time");
    const time = timeInputElement.value;
    const dateInputElement = document.querySelector(".js-todo-date");
    const dueDate = dateInputElement.value;

    if (!name || !time || !dueDate) {
        alert('Please fill in all fields');
        return;
    }

    toDoList.push({
        name,
        time,
        dueDate
    });

    // Clear all input fields
    inputElement.value = '';
    timeInputElement.value = '';
    dateInputElement.value = '';
    
    renderTodoList();
}