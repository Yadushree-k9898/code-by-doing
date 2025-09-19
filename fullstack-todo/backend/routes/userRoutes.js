const express = require('express')
const wiki = require("./wiki.js")
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Wiki home page')
})

router.get("/about", (req, res) =>{
    res.send("About this wiki")
})

router.get("/users/:userId/books/:bookId", (req, res) =>{
    res.send(req.params)
})

router.get('/users/:"user id"/books/:"book-id"', (req, res) => {
    const user = req.params["user id"]
    const book = req.params["book-id"]
    res.send({user, book})
});

router.get("/users/*example", (req, res) =>{
    res.send(req.params)
})
router.get("/file/:filename{.:ext}", (req, res) =>{
    res.send(req.params)
})

exports.get("/about", async(req, res, next) =>{
    const successfulResult = await About.find({}).exec()
    res.render("about_view", {title: "About", list: successfulResult})
})

exports.get("/about", (req, res, next) => About.find({})
.exec()
.then((successfulResult) => {
    res.render("about_view", {title: "About", list: successfulResult})
})
.catch((err) =>{
    next(err)
}) )

router.get('/', (req, res) =>{
    throw new Error("SynchronousException")
})

router.get("/", (req, res, next) =>{
    setTimeout(() => {
        try{
            throw new Error('AsynchronousException')
        } catch(err){
            next(err)
        }
    }, 100)
})

router.get("/about", (req, res, next) =>{
    About.find({}).exec((err, queryResults) =>{
        if(err){
            return next(err)
        }
        res.render("about_view", {title: "About", list: queryResults})
    })
})

module.exports = router