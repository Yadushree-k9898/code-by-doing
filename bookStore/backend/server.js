const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const indexRoutes = require('./routes/index')
const catalogRoutes = require('./routes/catalog')
const userRoutes = require('./routes/users')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use("/", indexRoutes)
app.use("/api/catalog", catalogRoutes)
app.use("/api/users", userRoutes)

app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).json({error:"Something went wrong!"})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
