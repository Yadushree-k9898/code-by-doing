const mongoose = require('mongoose')
const {DateTime} = require('luxon')

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema(
    {
        book:{
            type:Schema.Types.ObjectId, 
            ref:"Book",
            required:true
        },
        imprint: {type: String, required: true},
        status:{
            type: String,
            enum: [
                "Available",
                "Maintenance",
                "Loaded",
                "Reserved"
            ],
            default: "Maintenance",
            required: true,
        },
        due_back: {
            type:Date,
            default:Date.now()
        }, 
    },
    {timestamps: true}
)

BookInstanceSchema.virtual("url").get(function(){
    return this.due_back ? DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED) : ""
})

module.exports = mongoose.model("BookInstance", BookInstanceSchema)