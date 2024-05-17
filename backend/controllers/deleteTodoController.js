const todoSchema = require("../model/todoSchema")

let deleteTodoController = async (req, res)=>{
    let deleteData = await todoSchema.findOneAndDelete(req.body.id)
}

module.exports = deleteTodoController