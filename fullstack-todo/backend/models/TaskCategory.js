const mongoose = require('mongoose')

const taskCategoriesSchema = new mongoose.Schema({
    todo_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Todo',
        required: true
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    },
    name:{
        type:String,
        required:true,
        trim:true
    }
}, {timestamps: true})

const TaskCategory = mongoose.model('TaskCategory', taskCategoriesSchema)
module.exports = TaskCategory