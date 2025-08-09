import React, { useState } from 'react'

const Todo = () => {
    const[tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () =>{
        if(input.trim() === '') return ;
        setTasks([...tasks, input])
        setInput("")
    }

    const removeTasks = (index) =>{
        setTasks(tasks.filter((_, i) => i!== index))
    }
  return (
    <div style={{padding:20}}>
            <h2>TODO APP</h2>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter a tasks'
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, i) =>(
                    <li key={i}>
                    {task}  <button onClick={() => removeTasks(i)}>Delete</button>
                </li>
                ))}
            </ul>
    </div>
  )
}

export default Todo