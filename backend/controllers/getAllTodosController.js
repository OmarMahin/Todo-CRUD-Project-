const todoSchema = require("../model/todoSchema")

let getAllTodoController = async (req,res)=>{
    let all_todo_data = await todoSchema.find({})   
    res.send(all_todo_data)
}

module.exports = getAllTodoController