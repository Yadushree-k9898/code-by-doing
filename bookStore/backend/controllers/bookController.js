const Book = require('../models/book')
const BookInstance = require('../models/bookinstance')

exports.getAllBooks = async(req, res) =>{
    try{
        const books = await Book.find()
        .populate("author")
        .populate("genre")
        .sort({title: 1});
    res.json(books);
    } catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getBookById = async (req, res) =>{
    try{
        const book = await Book.findById(req.params.id)
            .populate("author")
            .populate("genre")

        if(!book) return res.status(404).json({message:"Book not found"})

        const copies = await BookInstance.find({book: req.params.id})

        res.json({book, copies})
    } catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.createBook = async (req, res) =>{
    try{
        const { title, author, summary, isbn, genre} = req.body;

        const book = new Book({title, author, summary, isbn, genre}) ;
        const savedBook = await book.save()
        res.status(201).json(savedBook)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.updateBook = async(req, res) =>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).populate("author genre")

        if(!book) return res.status(404).json({message: "Book not found"})
        res.json(book)
    }catch(err){
        res.status(400).json({error: message})
    }
}

exports.deleteBook = async (req, res) =>{
    try{
        const copies = await BookInstance.find({book:req.params.id})
        if(copies.length > 0){
            return res.status(400).json({
                message: "Book cannot be deleted, copies exist in the library"
            })
        }
        await Book.findByIdAndDelete(req.params.id)
        res.json({message: "Book deleted successfully"})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}