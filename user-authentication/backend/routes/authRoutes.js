const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const SECRET = 'secret123'

router.post('/register', async(req, res) => {
    const hashed = await bcrypt.hash(req.body.password, 10)
    const u = new User({username:req.body.username, password:hashed})
    await u.save()
    res.json({message: 'User registered'})
})

router.post('/login', async(req, res) => {
    const user = await User.findOne({username: req.body.username})
    if(!user) return res.status(404).json({message: 'Not Found'})
    const valid = await bcrypt.compare(req.body.password, user.password) 
    if(!valid) return res.status(401).json({message: 'Invalid'});
    const token = jwt.sign({id:user._id}, SECRET, {expires:'1h'})
    
})
module.exports= router