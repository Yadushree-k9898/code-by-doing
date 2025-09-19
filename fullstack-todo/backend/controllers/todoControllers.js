const express = require('express')
const todoControllers = require('../controllers/todoControllers')
const Todo = require('../models/Todo')

exports.createTodo = async (req, res) =>{
    try{
        const newTodo = await Todo.create(req.body);
        res.status(201).json(newTodo)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.getAllTodos = async(req, res) =>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getTodoById = async(req, res) =>{
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message: 'Todo not found'})
        }
        res.status(200).json(todo)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}