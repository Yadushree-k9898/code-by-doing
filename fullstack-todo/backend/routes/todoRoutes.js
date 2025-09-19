const express = require('express')
const router = express.Router()
const todoControllers = require('../controllers/todoControllers')

router.post('/', todoControllers.createTodo)
router.get('/', todoControllers.getAllTodos)
router.get('/:id', todoControllers.getTodoById)

module.exports = router