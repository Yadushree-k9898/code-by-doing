const express = require('express')
const connectDB = require('./config/db')
const logger = require('./middleware/logger')
const todoRoutes = require('./routes/todoRoutes')

const app = express()
connectDB()
app.use(express.json())
app.use(logger)
app.use('/api/todos', todoRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({message: err.message})
})

app.listen(3000, () => console.log(`Server running on http://localhost:3000`))