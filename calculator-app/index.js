const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

let history = []

app.get('/history', (req, res) => {
    res.json(history)
})

app.post('/calculate', (req, res) => {
    const {expression, result} = req.body
    const id = Date.now()
    const entry = {id, expression, result}
    history.push(entry)
    res.status(201).json(entry)
}) 

const PORT = 3000;
app.listen(PORT, () => console.log(`Calculator Backend running at http://localhost:${PORT}`))