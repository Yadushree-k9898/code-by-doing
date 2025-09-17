const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.post('/', async(req, res) => res.json(await new Post(req.body).save()))
router.get('/', async(req, res) => res.json(await Post.find()))
module.exports = router