const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const app = express()
connectDB()
app.use(express.json())
app.use('/api/auth', authRoutes)

app.listen(3000, () => console.log('Server running on http://localhost:3000')
)