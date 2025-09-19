const mongoose = require('mongoose')

const catagorySchema = new mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type:String,
        required: true,
        trim: true
    }
}, {timestamps: true})


const Category = mongoose.model('Category', catagorySchema)
module.exports = Category