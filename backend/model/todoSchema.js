const mongoose = require("mongoose")

const {Schema} = mongoose

const todoSchema = new Schema(
    {
        todo: {
            type: String,   
        }
    },
)

module.exports = mongoose.model('Todo', todoSchema)