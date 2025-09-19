const BookInstance = require('../models/bookinstance')

exports.getAllBookInstances = async(req, res) =>{
    try{
        const instances = await BookInstance.find().populate('book');
        res.json(instances)

    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getBookInstanceById = async (req, res) =>{
    try{
        const instance = await BookInstance.findById(req.params.id).populate("book");
        if(!instance)
            return res.status(404).json({message:"Book copy not found"})
        res.json(instance)

    }catch(err){
        res.status(500).json({error:err.message})
    }
}

exports.createBookInstance = async (req, res) =>{
    try{
        const {book, imprint, status, due_back} = req.body;

        const instance = new BookInstance({book, imprint, status, due_back});
        const savedInstance = await instance.save();
        res.status(201).json(savedInstance)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.updateBookInstance = async (req, res) =>{
    try{
        const instance = await BookInstance.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ).populate("book")

        if(!instance)
            return res.status(404).json({message: "Book copy not found"});
        res.json(instance)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.deleteBookInstance = async(req, res) =>{
    try{
        const instance = await BookInstance.findByAndDelete(req.params.id);
        if(!instance)
            return res.status(404).json({message: "Book copy not found"});
        res.json({message: "Book instance deleted successfully"})
    } catch(err){
        res.status(500).json({error: err.message})
    }
}