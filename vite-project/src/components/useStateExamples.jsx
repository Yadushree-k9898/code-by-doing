import React, {useState} from 'react'

const UseStateExamples = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const[text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [ user, setUser] = useState({name: '', age: ''})

    const handleIncrement = () =>{
        setCount(count => count + 1)
    }

    const handleDecrement = () =>{
        setCount(count => count -1)
    }

    const handleReset = () =>{
        setCount(0)
    }


    const handleToggle = () =>{
        setIsVisible(!isVisible)
    }

    const addTodos = () =>{
        setTodos([...todos, `Tast ${todos.length +1}`])
    }

    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }
  return (
    <>
    <h1>Use state Examples...</h1>
    <h1>Count is: {count}</h1>

    <input value={text} onChange={(e) => setText(e.target.value)}/>
    <h2>{text}</h2>
    {isVisible && <p>This is Toggle statement</p>}
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>0</button>
    <button onClick={handleToggle}>Toggle</button>
    <button onClick={addTodos}>ADD</button>
    <ul>{todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>

    <input name='name' onChange={handleChange}/>
    <input name="age" onChange={handleChange}/>
    <p>{user.name} is {user.age}</p>
    </>
  )
}

export default UseStateExamples
