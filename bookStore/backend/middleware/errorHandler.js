const errorHandler = (err, req, req, next) =>{
    console.error("Error:", err.stack)

    res.status(err.status || 500).json({
        success:false,
        message:err.message || "internal server error"
    })
}

module.exports = errorHandler