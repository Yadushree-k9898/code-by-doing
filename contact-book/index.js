const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

let contacts = []

app.get('/contacts', (req, res) => {
    res.json(contacts)
})

app.post('/contacts', (req, res) =>{
    const {name, phone, email} = req.body;
    const id = Date.now();
    const newContact = {id, name, phone, email}
    contacts.push(newContact)
    res.status(201).json(newContact)
})


app.delete('/contacts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    contacts = contacts.filter(contact => contact.id !== id)
    res.json({message: 'Contact deleted successfully'})
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`))