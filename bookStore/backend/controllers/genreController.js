const Genre = require('../models/genre')
const Book = require('../models/book')

exports.getAllGenres = async(req, res) =>{
    try{
        const genres = await Genre.find().sort({name:1});
        res.json(genres)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getGenreById = async (req, res) =>{
    try{
        const genre = await Genre.findById(req.params.id);
        if(!genre) return res.status(404).json({message: "Genre not found"});

        const books = await Book.find({genre: req.params.id}, "title summary");

        res.json({genre, books})
    } catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.createGenre = async(req, res) =>{
    try{
        const {name} = req.body;

        const genre = new Genre({name});
        const savedGenre = await genre.save()
        res.status(201).json(savedGenre)
    } catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.updateGenre = async(req, res) =>{
    try{
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if(!genre) return res.status(404).json({message: "Genre not found"});
        res.json(genre)
    } catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.deleteGenre = async (req, res) => {
    try{
        const books = await Book.find({genre: req.params.id});
        if(books.length > 0){

            return res
            .status(400)
            .json({message: "Genre cannot be deleted, books are still associated"})
        }
        await Genre.findByIdDelete(req.params.id)
        res.json({message: "Genre deleted successfully"})
    } catch(err){
        res.status(500).json({error: err.message})
    }
}