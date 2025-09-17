const apiURL = 'http://localhost:3000/api/todos'

document.getElementById('todoForm').addEventListener('submit', async(e) => {
    e.preventDefault()
    const taskInput = document.getElementById('task')
    await fetch(apiURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({task:taskInput.value})
    })
    taskInput.value = ''
    loadTodos()
})

async function loadTodos(){
    const res = await fetch(apiURL);
    const todos = await res.json();
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.task} [${todo.completed ? 'Done' : 'Pending'} ]`;
        list.appendChild(li)
    })

}

window.onload = loadTodos