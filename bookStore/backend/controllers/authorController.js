const Author = require("../models/author");
const Book = require("../models/book");

// GET all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find().sort({ family_name: 1 });
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single author details (with their books)
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });

    const books = await Book.find({ author: req.params.id }, "title summary");

    res.json({ author, books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE new author
exports.createAuthor = async (req, res) => {
  try {
    const { first_name, family_name, date_of_birth, date_of_death } = req.body;

    const author = new Author({
      first_name,
      family_name,
      date_of_birth,
      date_of_death,
    });

    const savedAuthor = await author.save();
    res.status(201).json(savedAuthor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE author
exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE author
exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });

    const books = await Book.find({ author: req.params.id });
    if (books.length > 0) {
      return res.status(400).json({
        message: "Author cannot be deleted, books are still associated",
      });
    }

    await Author.findByIdAndDelete(req.params.id);
    res.json({ message: "Author deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
