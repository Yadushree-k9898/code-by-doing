const mongoose = require('mongoose')
require('dotenv').config()

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('MongoDB connected');
    
}