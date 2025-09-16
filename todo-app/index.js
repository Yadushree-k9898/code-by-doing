const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

let todos = []

app.get('/todos', (req, res) =>{
    res.json(todos)
})

app.post('/todos', (req, res) => {
    const {task} = req.body;
    const id = Date.now()
    const newTodo = {id, task}
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    todos = todos.filter(todo => todo.id !== id)
    res.json({message: 'Deleted successfully'})
})

const PORT = 3000
app.listen(PORT, () => console.log(`Todo backend running at http://localhost:${PORT}`))