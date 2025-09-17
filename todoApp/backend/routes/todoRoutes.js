const express = require('express')
const Todo = require('../models/Todo')
const router = express.Router()


router.post('/', async (req, res, next) => {
    const todo = new Todo(req.body)
    const saved = await todo.save()
    res.json(saved)
})

router.get('/', async(req, res, next) =>{
    const todos = await Todo.find()
    res.json(todos)
})

module.exports = router