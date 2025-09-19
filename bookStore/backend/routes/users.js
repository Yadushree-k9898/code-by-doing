const express = require('express')
const router = require('router')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

router.post("/register", async(req, res) =>{
    try{
        const {username, password} = req.body;

        const existingUser = await User.findOne({username})
        if(existingUser) return res.status(400).json({message: "User alredy exists"})

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({username, password:hashedPassword})
        await user.save()

        res.status(201).json({message: "User registered successfully"})

    }catch(err){
        res.status(500).json({error: err.message})
    }
})

router.post("/login", async(req, res) =>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username})
        if(!user) return res.status(400).json({message: "Invalid credentials"});

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"})

        const token = jwt.sign(
            {id: user._id, username:user.username},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )
    res.json({token});

    }catch(err){
        res.status(500).json({error:err.message})
    }
})

module.exports = router