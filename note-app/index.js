const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

let notes = []

app.get('/', (req, res) => {
    res.json(notes)
})

app.post('/notes', (req, res) => {
    const {content} = req.body;
    const id = Date.now()
    const newNote = {id, content}
    notes.push(newNote)
    res.json(newNote)
})

app.delete('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.json({message: 'Deleted Successfully'})
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))