const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const bookController = require('../controllers/bookController')
const genreController = require('../controllers/genreController')
const bookInstanceController = require('../controllers/bookinstanceController')
const auth = require('../middleware/auth')


router.get("/authors", authorController.getAllAuthors)
router.get("/author/:id", authorController.getAuthorById)
router.post("/author", auth, authorController.createAuthor)
router.put("/author/:id", auth, authorController.updateAuthor)
router.delete("/author/:id", auth, authorController.deleteAuthor)


router.get("/genres", genreController.getAllGenres)
router.get("/genre/:id", genreController.getGenreById)
router.post("/genre", auth, genreController.createGenre)
router.put("/genre/:id", auth, genreController.updateGenre)
router.delete("/genre/:id", auth, genreController.deleteGenre)

router.get("/books", bookController.getAllBooks)
router.get("/book/:id", bookController.getBookById)
router.post("/book", auth, bookController.createBook)
router.put("/book/:id", auth, bookController.updateBook)
router.delete("/book/:id", auth, bookController.deleteBook)

router.get("/bookinstances", bookInstanceController.getAllBookInstances)
router.get("/bookinstances/:id", bookInstanceController.getBookInstanceById)
router.post("/bookinstances", auth, bookInstanceController.createBookInstance)
router.put("/bookinstances/:id", auth, bookInstanceController.updateBookInstance)
router.delete("/bookinstances/:id", auth, bookInstanceController.deleteBookInstance)

module.exports = router