function addTask(){
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    const container = document.getElementById('taskContainer')

    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';

    deleteBtn.addEventListener('click', ()=>{
        li.remove();
        
    })

    li.append(deleteBtn)
    document.getElementById('taskContainer').append(li)
    input.value = ''
}