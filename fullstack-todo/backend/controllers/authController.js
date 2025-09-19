const express = require('express')
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    res.json({message:'Welcome to Todo Application'})
})

router.post('/register', async (req, res) =>{
   const {name, email, password} = req.body;
   try{
    let user = await User.findOne({email});
    if(user){
        return res.status(400).json({message: 'User already exists'});

    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    user = new User({
        name, 
        email,
        password: hashedPassword
    });
    await user.save();
    res.status(201).json({message: 'User registered successfully'})
   } catch(err){
    console.error(err.message)
    res.status(500).send('Server error')
   }
})


router.post('/login', async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({error: 'Invalid credentials'})
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if(!passwordMatch){
            return res.status(401).json({error: 'Invalid creadentails'})
        }

        const token = jwt.sign({email: user.email}, 'secret')
        res.status(200).json({token})
        
    } catch(error){
        res.status(500).json({error: 'Internal server error'})
    }
})


module.exports = router