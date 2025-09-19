const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const todoRoutes = require('./routes/todoRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/todos', todoRoutes)
app.use('/api/users', userRoutes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port  ${PORT}`)
})