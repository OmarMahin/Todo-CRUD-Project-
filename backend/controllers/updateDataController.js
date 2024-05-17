const todoSchema = require("../model/todoSchema")

let updateDataController = async (req,res)=>{
    let {id, todo} = req.body

    let updateData = await todoSchema.findByIdAndUpdate(id, {todo: todo }, {new: true})
    
}

module.exports = updateDataController